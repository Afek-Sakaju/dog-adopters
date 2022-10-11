import { MongoMemoryServer } from 'mongodb-memory-server';
import { connectDB } from '../DB/mongoose';
import { JEST_TIMEOUT, MONGO_URL } from './environment-variables';
import { database, config, up } from 'migrate-mongo';
import { MIGRATIONS_DIR_PATH } from '../utils/paths';

if (JEST_TIMEOUT) {
    jest.setTimeout(JEST_TIMEOUT);
}

let mongod: any;

beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await connectDB(uri);

    // const uri = MONGO_URL;
    // await connectDB(uri);

    await config.set({
        mongodb: {
            url: uri,
            // @ts-ignore
            options: { useNewUrlParser: true },
        },
        migrationsDir: MIGRATIONS_DIR_PATH,
        changelogCollectionName: 'changelog',
        migrationFileExtension: '.js',
    });
    const { db, client } = await database.connect();
    await up(db, client);
});

afterEach(async () => {
    mongod?.stop();
});
