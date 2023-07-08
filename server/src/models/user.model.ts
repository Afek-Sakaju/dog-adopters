import mongoose, { Schema, Model } from 'mongoose';
import bcrypt from 'bcrypt';

import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema(
    {
        username: { type: Schema.Types.ObjectId, required: true, unique: true },
        password: { type: String, required: true },
        phoneNumber: { type: String },
        fullName: { type: String, default: 'Anonymous' },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(10);
        const plaintextPassword = this.password as string | Buffer;
        const hashed = bcrypt.hashSync(plaintextPassword, salt);

        this.password = hashed;
    }
    done();
});

/* userSchema.pre('findOneAndUpdate', async function (done) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(10); // 10 = saltRounds
        const plaintextPassword = this.password;
        const hashed = bcrypt.hashSync(plaintextPassword, salt);

        this.password = hashed;
    }
    done();
});*/

userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    delete obj.__v;
    return obj;
};

userSchema.index({ username: 1 });

export const UserModel: Model<IUser> = mongoose.model<IUser>(
    'users',
    userSchema
);
