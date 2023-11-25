import * as yup from 'yup';

import { assertNameStringInput } from '@utils';

const noSpacesRegExp = /^\S*$/;
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// eslint-disable-next-line import/prefer-default-export
export const userSchema = yup.object().shape({
    username: yup
        .string()
        .min(5)
        .max(20)
        .required('Please enter username')
        .matches(noSpacesRegExp, "Spaces aren't allowed"),
    password: yup
        .string()
        .min(5)
        .max(20)
        .required('Please enter password')
        .matches(noSpacesRegExp, "Spaces aren't allowed"),
    fullName: yup
        .string()
        .min(5)
        .max(20)
        .test(
            'assert-user-full-name-validity',
            'Invalid full name',
            assertNameStringInput
        ),
    phoneNumber: yup
        .string()
        .matches(phoneRegExp, 'Invalid phone number')
        .min(7)
        .max(17)
        .matches(noSpacesRegExp, "Spaces aren't allowed"),
});
