import * as yup from 'yup';

import {
    GENDERS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
    assertNameStringInput,
} from '@utils';

const GENDERS_VALUES = GENDERS_SELECT_PROPERTIES.map(({ value }) => value);

// eslint-disable-next-line import/prefer-default-export
export const dogDataFiltersSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Name can't be one character")
        .max(20, "Name can't be more then 20 characters")
        .test(
            'assert-dog-name-validity',
            "Invalid dog's name input",
            assertNameStringInput
        ),
    minAge: yup
        .number('Age must be a valid number')
        .min(MIN_DOG_AGE, "Age can't be a negative number")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    maxAge: yup
        .number('Age must be a valid number')
        .min(MIN_DOG_AGE, "Age can't be a negative number")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    gender: yup
        .string('Gender must be a valid string')
        .oneOf(GENDERS_VALUES, 'Gender must be Male or Female')
        .required('Gender is required'),
    race: yup
        .string('Race must be a valid string')
        .min(2, "Race can't be one character")
        .max(35, "Race can't be more then 35 characters")
        .test(
            'assert-race-validity',
            "Invalid dog's race input",
            assertNameStringInput
        ),
});
