import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'users',
            description: 'User Owner on the dog', // for swagger
        },
        adopter: {
            type: mongoose.Types.ObjectId,
            ref: 'users',
            default: null,
            description: 'User that adopt the dog', // for swagger
        },
        adoptionAt: {
            type: Date,
            default: 0,
            description: 'the date for adopting', // for swagger
        },
        race: { type: String },
        gender: { type: String, enum: ['F', 'M'], required: true },
        age: { type: Number, min: 0, max: 20 },
        vaccines: { type: Number, default: 0 },
        behave: { type: [String], default: [] },
        image: { type: String, default: '/static/dog_default.png' },
        name: { type: String, default: 'nameless' },
        status: { type: Number, enum: [0, 1], default: 0 },
    },
    { timestamps: true }
);

dogSchema.index({ race: 1 });

export const DogModel = mongoose.model('dogs', dogSchema);
