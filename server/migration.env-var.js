const { config } = require('dotenv');
const { expand } = require('dotenv-expand');
const path = require('path');

const configPath = path.resolve(
    __dirname,
    `.env.${process.env.NODE_ENV ?? 'local'}`
);

expand(config({ path: configPath }));

module.exports.MONGO_URL = process.env.MONGO_URL ?? '';
module.exports.NODE_ENV = process.env.NODE_ENV ?? 'local';
