import mongoose from 'mongoose';
import { connectDB } from '../DB/mongoose';
import { MONGO_URL } from '../utils/envirnoment-variables';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

(async () => {
    await connectDB(MONGO_URL);
    await mongoose.connection.db.dropDatabase();
})();
