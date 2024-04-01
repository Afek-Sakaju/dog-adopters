import * as yup from 'yup';

import {
    ALLOWED_IMAGE_FORMATS,
    GENDERS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
    assertNameStringInput,
    assertArrayOfNameStringInput,
    assertFileImageType,
} from '#utils';

const GENDERS_VALUES = GENDERS_SELECT_PROPERTIES.map(({ value }) => value);

// eslint-disable-next-line import/prefer-default-export
export const dogSchema = yup.object().shape({
    name: yup
        .string('Must be a string')
        .min(2, 'Too short')
        .max(20, 'Too long-max 20 chars')
        .test(
            'assert-dog-name-validity',
            'Invalid name',
            assertNameStringInput
        ),
    notes: yup.string().min(10, 'Too short').max(150, 'Too long-max 150 chars'),
    age: yup
        .number('Must be a number')
        .min(MIN_DOG_AGE, "Can't be negative")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    isVaccinated: yup.boolean(),
    characteristics: yup
        .array('Must be an array')
        .of(yup.string('Characteristic must be a string'))
        .max(4, "Can't pick more than 4")
        .test(
            'assert-characteristics-validity',
            'Invalid characteristic',
            assertArrayOfNameStringInput
        ),
    image: yup
        .mixed()
        .required('Please provide image')
        .test(
            'assert-file-image-type',
            `${ALLOWED_IMAGE_FORMATS.join(' / ')}`,
            assertFileImageType
        ),
    gender: yup
        .string('Must be a string')
        .oneOf(GENDERS_VALUES, 'Please pick Male/Female')
        .required('Gender is required'),
    race: yup
        .string('Must be a string')
        .min(2, 'Too short')
        .max(35, 'Too long-max 35 chars')
        .test('assert-race-validity', 'Invalid race', assertNameStringInput),
});
