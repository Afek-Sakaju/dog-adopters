import * as yup from 'yup';

import {
    GENDERS_SELECT_PROPERTIES,
    ADOPTION_STATUS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
    noDigitsRegExp,
} from '@/utils';

const GENDERS_VALUES = GENDERS_SELECT_PROPERTIES.map(
    ({ value }) => value as string
);
const ADOPTION_STATUS_VALUES = ADOPTION_STATUS_SELECT_PROPERTIES.map(
    ({ value }) => value as number
);

// eslint-disable-next-line import/prefer-default-export
export const dogFiltersSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too short')
        .max(20, 'Too long-max 20 chars')
        .matches(noDigitsRegExp, "Name can't include digits"),
    minAge: yup
        .number()
        .min(MIN_DOG_AGE, "Can't be negative")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    maxAge: yup
        .number()
        .min(MIN_DOG_AGE, "Can't be negative")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    gender: yup.string().oneOf(GENDERS_VALUES, 'Please pick Male/Female'),
    status: yup
        .number()
        .oneOf(ADOPTION_STATUS_VALUES, 'Please pick Adopted/Looking for Home'),
    breed: yup
        .string()
        .min(2, 'Too short')
        .max(35, 'Too long-max 35 chars')
        .matches(noDigitsRegExp, "Race can't include digits"),
});
