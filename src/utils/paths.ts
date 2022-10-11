import path from 'path';

export const MIGRATIONS_DIR_PATH = path.resolve(
    __dirname,
    '../..',
    'migrations'
);

export const dotEnvPath = path.resolve(
    __dirname,
    '../..',
    `.env.${process.env.NODE_ENV ?? 'local'}`
);
