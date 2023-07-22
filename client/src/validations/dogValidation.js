import * as yup from 'yup';

import { assertFullnameSpaces } from '@utils';

const noSpacesRegExp = /^\S*$/;

// eslint-disable-next-line import/prefer-default-export
export const dogSchema = yup.object().shape({
    name: yup.string().min(2).max(20).test({
        name: 'assert-spaces-validity',
        test: assertFullnameSpaces,
    }),
    age: yup.number().min(0).max(20),
    vaccines: yup.number().min(0).max(20),
    behave: yup
        .array()
        .of(yup.string().required('Behavior must be a string'))
        .min(1)
        .max(10),
    image: yup
        .string()
        .min(20)
        // This limit based on the maximum URL length supported by most modern browsers and servers.
        .max(8192)
        .matches(noSpacesRegExp, 'Image url should not contain spaces'),
    gender: yup.string().oneOf(['F', 'M']).required('Gender is required'),
    race: yup.string().min(2).max(20).test({
        name: 'assert-spaces-validity',
        test: assertFullnameSpaces,
    }),
});