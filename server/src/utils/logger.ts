import winston from 'winston';
import winstonDailyRotateFile from 'winston-daily-rotate-file';

import { LOGGING_LINE_TRACE, LOGGING_MODE } from './environment-variables';
import { LOG_DIR_PATH } from './paths';

const colorizer = winston.format.colorize();

const enum LEVELS {
    error = 'error',
    warn = 'warn',
    info = 'info',
    debug = 'debug',
    verbose = 'verbose',
    useraction = 'useraction',
    silly = 'silly',
}

interface PRINTF {
    request_id: string;
    timestamp: string;
    message: string;
    level: LEVELS;
    [key: string]: any;
}

function stringifyMetaData(metadata: string | object = '') {
    if (!metadata || typeof metadata === 'string') return metadata;

    return Object.keys(metadata).length
        ? `\n\t${Object.keys(metadata)
              .map((key) => {
                  const value = (<any>metadata)[key];
                  const valueStr =
                      value && typeof value === 'object'
                          ? JSON.stringify(value)
                          : value;

                  return `${key}: ${valueStr}`;
              })
              .filter((v) => v)
              .join(',\n\t')}`
        : '';
}

class Logger {
    private logger;
    private filterMetadata(metadata: any) {
        const filteredMetadata = { ...metadata };

        if (filteredMetadata.data?._doc?.image) {
            const imageLength = JSON.stringify(
                filteredMetadata.data?._doc?.image
            ).length;

            filteredMetadata.data._doc.image = `image ${imageLength} character length`;
        }

        if (filteredMetadata.data?.image) {
            const imageLength = JSON.stringify(
                filteredMetadata.data?.image
            ).length;

            filteredMetadata.data.image = `image ${imageLength} character length`;
        }

        return filteredMetadata;
    }

    private filterImageFromMetadata(metadata: any) {
        // Used copy to prevent changing the metadata by reference
        const metadataCopy = JSON.parse(JSON.stringify(metadata));

        const filterImage = (image: any) => {
            const alreadyFilteredSubstring = 'character length';
            const isImageFiltered = image.includes(alreadyFilteredSubstring);

            if (!image || isImageFiltered || typeof image !== 'string') return;

            const newImageValue = `image ${image.length} character length`;
            return newImageValue;
        };

        /* Unfortunately for some reason switch loop making here some bugs and skipping true cases
        for now implemented the old dirty way. */
        if (metadataCopy.body?._doc?.image) {
            const filteredImage = filterImage(metadataCopy.body._doc.image);
            metadataCopy.body._doc.image = filteredImage;
        } else if (metadataCopy.body?.image) {
            const filteredImage = filterImage(metadataCopy.body.image);
            metadataCopy.body.image = filteredImage;
        } else if (metadataCopy.data?._doc?.image) {
            const filteredImage = filterImage(metadataCopy.data._doc.image);
            metadataCopy.data._doc.image = filteredImage;
        } else if (metadataCopy.data?.image) {
            const filteredImage = filterImage(metadataCopy.data.image);
            metadataCopy.data.image = filteredImage;
        } else if (metadataCopy.response?.image) {
            const filteredImage = filterImage(metadataCopy.response.image);
            metadataCopy.response.image = filteredImage;
        }

        return metadataCopy;
    }

    constructor() {
        const transportDailyRotateFile = new winstonDailyRotateFile({
            dirname: LOG_DIR_PATH,
            extension: '.log',
            filename: 'dog-adopter-%DATE%',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            level: LOGGING_MODE,
        });

        this.logger = winston.createLogger({
            transports: [
                transportDailyRotateFile,
                new winston.transports.Console({ level: LOGGING_MODE }),
            ],
            format: winston.format.combine(
                winston.format.splat(),
                winston.format.timestamp(),
                winston.format.printf(
                    ({
                        timestamp,
                        level,
                        request_id,
                        message,
                        ...metadata
                    }: winston.Logform.TransformableInfo | PRINTF): string => {
                        return colorizer.colorize(
                            level,
                            `${timestamp} [${level}] [${request_id}] ${message} ${stringifyMetaData(
                                metadata
                            )}\n`
                        );
                    }
                )
            ),
        });

        this.logger.on('error', (error: any) => {
            console.error('Logger Error Caught: ', error);
        });
    }

    private static getLineTrace(error: Error) {
        const lineTraces =
            error?.stack
                ?.split('\n')
                .filter((line) => !/\\logger\.[jt]s:\d+:\d+\),?$/.test(line)) ||
            [];

        let lineTrace = lineTraces[1];
        for (const line of lineTraces.slice(1)) {
            const isLoggerFile = /[lL]ogger\.[tj]s:\d+:\d+\)$/.test(
                line.trim()
            );
            if (!isLoggerFile) {
                lineTrace = line;
                break;
            }
        }

        return lineTrace.trimStart();
    }

    writeLog(
        level: LEVELS,
        request_id: string,
        message: string,
        options: any = {}
    ) {
        if (options?.hasOwnProperty('message')) {
            options.$message = options.message;
            delete options.message;
        }

        let lineTrace;
        if (LOGGING_LINE_TRACE.includes(level) || level === LEVELS.error) {
            const error = new Error(message);
            lineTrace = Logger.getLineTrace(error);
        }

        if (lineTrace) {
            options.lineTrace = lineTrace;
        }

        this.logger.log(level, message, {
            request_id,
            ...this.filterImageFromMetadata(options),
        });
    }

    error(request_id: string, message: any, metadata: any = {}) {
        this.writeLog(
            LEVELS.error,
            request_id,
            message,
            this.filterImageFromMetadata(metadata)
        );
    }

    warn(request_id: string, message: any, metadata = {}) {
        this.writeLog(
            LEVELS.warn,
            request_id,
            message,
            this.filterImageFromMetadata(metadata)
        );
    }

    info(request_id: string, message: any, metadata = {}) {
        this.writeLog(
            LEVELS.info,
            request_id,
            message,
            this.filterImageFromMetadata(metadata)
        );
    }

    debug(request_id: string, message: any, metadata = {}) {
        this.writeLog(
            LEVELS.debug,
            request_id,
            message,
            this.filterImageFromMetadata(metadata)
        );
    }

    verbose(request_id: string, message: any, metadata = {}) {
        this.writeLog(
            LEVELS.verbose,
            request_id,
            message,
            this.filterImageFromMetadata(metadata)
        );
    }

    userAction(request_id: string, message: any, metadata = {}) {
        this.writeLog(
            LEVELS.useraction,
            request_id,
            message,
            this.filterImageFromMetadata(metadata)
        );
    }

    silly(request_id: string, message: any, metadata = {}) {
        this.writeLog(
            LEVELS.silly,
            request_id,
            message,
            this.filterImageFromMetadata(metadata)
        );
    }
}

const logger = new Logger();
export default logger;

// Print the first log, with the current logging mode
(<any>logger)[LOGGING_MODE]('LOGGER', 'logger instance created', {
    LOGGING_MODE,
});
