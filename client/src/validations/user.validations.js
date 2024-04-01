import * as yup from 'yup';

import { noDigitsRegExp, noSpacesRegExp, phoneRegExp } from '#utils';

// eslint-disable-next-line import/prefer-default-export
export const userSchema = yup.object().shape({
    username: yup
        .string('Must be a string')
        .min(5, 'Too short')
        .max(20, 'Too long-max 20 chars')
        .required('Please enter username')
        .matches(noSpacesRegExp, "Spaces aren't allowed"),
    password: yup
        .string('Must be a string')
        .min(5, 'Too short')
        .max(20, 'Too long-max 20 chars')
        .required('Please enter password')
        .matches(noSpacesRegExp, "Spaces aren't allowed"),
    fullName: yup
        .string('Must be a string')
        .min(5, 'Too short')
        .max(20, 'Too long-max 20 chars')
        .matches(noDigitsRegExp, "Full name can't include digits"),
    phoneNumber: yup
        .string('Must be a string')
        .matches(phoneRegExp, 'Invalid phone number')
        .min(7, 'Too short')
        .max(17, 'Too long-max 17 chars')
        .matches(noSpacesRegExp, "Spaces aren't allowed"),
});
