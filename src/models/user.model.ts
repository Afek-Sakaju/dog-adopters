import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phoneNumber: { type: String },
        fullName: { type: String, default: 'Anonymous' },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

userSchema.index({ username: 1 });

export const UserModel = mongoose.model('users', userSchema);
