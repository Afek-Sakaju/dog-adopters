import mongoose, { Model } from 'mongoose';

import { IDog } from '../interfaces/dog.interface';

const dogSchema = new mongoose.Schema(
    // The description field is for swagger
    {
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'users',
            description: 'User Owner on the dog',
        },
        adopter: {
            type: mongoose.Types.ObjectId,
            ref: 'users',
            default: null,
            description: 'User that adopt the dog',
        },
        adoptionAt: {
            type: Date,
            default: 0,
            description: 'the date for adopting',
        },
        breed: { type: String },
        gender: { type: String, enum: ['F', 'M'], required: true },
        age: { type: Number, min: 0, max: 20 },
        isVaccinated: { type: Boolean, default: false },
        isDesexed: { type: Boolean, default: false },
        characteristics: { type: [String], default: [] },
        image: { type: String, default: '/static/dog_default.png' },
        name: { type: String, default: 'nameless' },
        notes: { type: String, default: '' },
        status: { type: Number, enum: [0, 1], default: 0 },
    },
    { timestamps: true }
);

dogSchema.index({ breed: 1 });

export const DogModel: Model<IDog> = mongoose.model<IDog>('dogs', dogSchema);
