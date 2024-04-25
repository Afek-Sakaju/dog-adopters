import * as yup from 'yup';

import { dogSchema, userSchema } from '@/validations';

export interface User extends Partial<yup.InferType<typeof userSchema>> {
    _id?: string;
}

export interface Dog extends Partial<yup.InferType<typeof dogSchema>> {
    _id?: string;
}
