import m2s from 'mongoose-to-swagger';

import { DogModel } from './dog.model';
import { UserModel } from './user.model';

const definitions = {
    dog: m2s(DogModel),
    user: m2s(UserModel),
};

export default definitions;
