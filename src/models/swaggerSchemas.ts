import m2s from 'mongoose-to-swagger';

import { DogModel } from './dog.model';
import { UserModel } from './user.model';

const definitions = {
    dog: m2s(DogModel),
    user: m2s(UserModel),
    pagination: {
        type: 'object',
        properties: {
            page: { type: Number, required: true },
            totalItems: { type: Number, required: true },
            itemsPerPage: { type: Number },
            totalPages: { type: Number },
        },
    },
};

export default definitions;
