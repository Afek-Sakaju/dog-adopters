import * as yup from 'yup';

import { assertSpacesValidity } from '@utils';

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
        .matches(noSpacesRegExp, 'Username should not contain spaces'),
    password: yup
        .string()
        .min(5)
        .max(20)
        .required('Please enter password')
        .matches(noSpacesRegExp, 'Password should not contain spaces'),
    fullName: yup
        .string()
        .min(5)
        .max(20)
        .test(
            'assert-spaces-validity',
            'Full name can contain space only between names',
            assertSpacesValidity
        ),
    phoneNumber: yup
        .string()
        .matches(phoneRegExp, 'Please enter a valid phone number')
        .min(7)
        .max(17)
        .matches(noSpacesRegExp, 'Phone number should not contain spaces'),
});
