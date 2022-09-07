import mongoose from 'mongoose';

export function connectDB(uri: string) {
    mongoose
        .connect(uri)
        .then(() => {
            console.log('connected to database');
        })
        .catch((err) => {
            console.log(`failed to connect, error:${err}`);
            throw err;
        });
}
