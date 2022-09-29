import { connectDB } from '../DB/mongoose';
import { JEST_TIMEOUT, MONGO_MEMORY, MONGO_URL } from './environment-variables';

if (JEST_TIMEOUT) {
    jest.setTimeout(JEST_TIMEOUT);
}

let mongod: any;

beforeAll(async () => {
    if (MONGO_MEMORY) {
        await import('mongodb-memory-server').then(
            async ({ MongoMemoryServer }) => {
                mongod = await MongoMemoryServer.create();
                const uri = mongod.getUri();
                await connectDB(uri);
            }
        );
    } else {
        const uri = MONGO_URL;
        await connectDB(uri);
    }
});

afterAll(async () => {
    mongod?.stop();
});
