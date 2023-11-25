import * as yup from 'yup';

import {
    GENDERS_SELECT_PROPERTIES,
    ADOPTION_STATUS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
    assertNameStringInput,
} from '@utils';

const GENDERS_VALUES = GENDERS_SELECT_PROPERTIES.map(({ value }) => value);
const ADOPTION_STATUS_VALUES = ADOPTION_STATUS_SELECT_PROPERTIES.map(
    ({ value }) => value
);

// eslint-disable-next-line import/prefer-default-export
export const dogDataFiltersSchema = yup.object().shape({
    name: yup
        .string('Must be a string')
        .min(2, 'Too short')
        .max(20, 'Too long-max 20 chars')
        .test(
            'assert-dog-name-validity',
            "Invalid dog's name input",
            assertNameStringInput
        ),
    minAge: yup
        .number('Must be a number')
        .min(MIN_DOG_AGE, "Can't be negative")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    maxAge: yup
        .number('Must be a number')
        .min(MIN_DOG_AGE, "Can't be negative")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    gender: yup
        .string('Must be a string')
        .oneOf(GENDERS_VALUES, 'Please pick Male/Female'),
    status: yup
        .number('Value must be a number')
        .oneOf(ADOPTION_STATUS_VALUES, 'Please pick Adopted/Looking for Home'),
    race: yup
        .string('Must be a string')
        .min(2, 'Too short')
        .max(35, 'Too long-max 35 chars')
        .test('assert-race-validity', 'Invalid race', assertNameStringInput),
});
