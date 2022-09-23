import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }, //, select: false
        phoneNumber: { type: String },
        fullName: { type: String, default: 'Anonymous' },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(10); // 10 = saltRounds
        const plaintextPassword = this.password;
        const hashed = bcrypt.hashSync(plaintextPassword, salt);

        this.password = hashed;
    }
    done();
});

// the problem is when i do this.. the passport
// config falls and the password argument is undefined
/* userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}; */

userSchema.index({ username: 1 }); // ask hadriel what it does?

export const UserModel = mongoose.model('users', userSchema);
