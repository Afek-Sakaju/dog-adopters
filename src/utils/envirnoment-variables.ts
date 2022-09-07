import { config } from 'dotenv';
import path from 'path';

const configPath = path.resolve(
    __dirname,
    '../..',
    `.env.${process.env.NODE_ENV ?? 'local'}`
);

config({ path: configPath });

export const PORT = +(process.env.PORT ?? 3005);
