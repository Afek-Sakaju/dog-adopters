import m2s from 'mongoose-to-swagger';

import { DogModel } from './dog.model';
import { UserModel } from './user.model';

const definitions = {
    dog: m2s(DogModel),
    user: m2s(UserModel),
    pagination: {
        type: 'object',
        properties: {
            page: { type: 'number', required: true },
            totalItems: { type: 'number', required: true },
            itemsPerPage: { type: 'number' },
            totalPages: { type: 'number' },
        },
    },
};

export default definitions;
