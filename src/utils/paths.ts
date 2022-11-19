import path from 'path';

export const MIGRATIONS_DIR_PATH = path.resolve(
    __dirname,
    '../..',
    'migrations'
);

export const DOT_ENV_PATH = path.resolve(
    __dirname,
    '../..',
    `.env.${process.env.NODE_ENV ?? 'local'}`
);

export const LOG_DIR_PATH = path.resolve(__dirname, '../..', 'logs');

export const PUBLIC_PATH = path.resolve(__dirname, '../..', 'public');

export const UPLOAD_DOG_PROFILES_PATH = path.resolve(
    __dirname,
    '../..',
    'public',
    'profiles'
);
