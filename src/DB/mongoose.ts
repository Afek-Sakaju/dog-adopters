import mongoose from 'mongoose';

export async function connectDB(uri: string) {
    if (mongoose.connection.readyState !== 0) return;

    return mongoose
        .connect(uri)
        .then(() => {
            console.log('connected to database');
        })
        .catch((err) => {
            console.log(`failed to connect, error:${err}`);
            throw err;
        });
}
