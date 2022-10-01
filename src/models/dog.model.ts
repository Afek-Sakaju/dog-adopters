import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema(
    {
        owner: { type: mongoose.Types.ObjectId, ref: 'users' },
        adopter: { type: mongoose.Types.ObjectId, ref: 'users', default: null },
        adoptionAt: { type: Date, default: 0 },
        race: { type: String },
        gender: { type: String, enum: ['F', 'M'], required: true },
        age: { type: Number, min: 0, max: 20 },
        vaccines: { type: Number, default: 0 },
        behave: { type: [String], default: [] },
        image: { type: String, default: '/static/dog_default.png' },
        name: { type: String, default: 'nameless' },
        status: { type: Number, enum: [0, 1], default: 0 },
        // note : status type was "String", modified to Number at 01\10\22
    },
    { timestamps: true }
);

dogSchema.index({ race: 1 });

export const DogModel = mongoose.model('dogs', dogSchema);
