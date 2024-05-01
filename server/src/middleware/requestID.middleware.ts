import { Response, Request, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

export function generateV4UUID(): string {
    return uuidv4();
}

const ATTRIBUTE_NAME = 'id';

export default function requestID({
    generator = generateV4UUID,
    headerName = 'X-Request-Id',
    setHeader = true,
} = {}) {
    return function (request: Request, response: Response, next: NextFunction) {
        const oldValue = request.get(headerName);
        const id = oldValue === undefined ? generator() : oldValue;

        if (setHeader) response.set(headerName, id);

        request[ATTRIBUTE_NAME] = id;

        next();
    };
}
