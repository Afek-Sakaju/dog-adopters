import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

import { DOT_ENV_PATH } from './paths';

expand(config({ path: DOT_ENV_PATH }));

export const PORT: number = +(process.env.PORT ?? 3005);
export const MONGO_URL: string = process.env.MONGO_URL ?? '';
export const MONGO_HOST: string = process.env.MONGO_HOST ?? '';
export const CORS_ORIGIN_URL: string = process.env.CORS_ORIGIN_URL ?? '';
export const NODE_ENV: string = process.env.NODE_ENV ?? 'local';
export const LOGGING_MODE: string = process.env.LOGGING_MODE ?? 'error';
export const RATE_LIMIT_LOGIN: number = +(
    (process.env.RATE_LIMIT_LOGIN as string) ?? 5
);
export const RATE_LIMIT_REGISTER: number = +(
    (process.env.RATE_LIMIT_REGISTER as string) ?? 5
);
export const RATE_LIMIT_DOGS_UPLOAD_IMAGES: number = +(
    (process.env.RATE_LIMIT_DOGS_UPLOAD_IMAGES as string) ?? 5
);
export const RATE_LIMIT_DOGS_CREATE =
    +(process.env.RATE_LIMIT_DOGS_CREATE as string) ?? 5;
export const RATE_LIMIT_DOGS_UPDATE: number = +(
    (process.env.RATE_LIMIT_DOGS_UPDATE as string) ?? 5
);
export const RATE_LIMIT_DOGS_DELETE: number = +(
    (process.env.RATE_LIMIT_DOGS_DELETE as string) ?? 5
);
export const LOGGING_LINE_TRACE: string[] =
    process.env.LOGGING_LINE_TRACE?.split(',') ?? ['error'];
