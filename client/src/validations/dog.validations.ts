import * as yup from 'yup';

import {
    ALLOWED_IMAGE_FORMATS,
    GENDERS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
    assertArrayOfNames,
    assertFileImageType,
    noDigitsRegExp,
} from '@/utils';

const GENDERS_VALUES = GENDERS_SELECT_PROPERTIES.map(
    ({ value }) => value as string
);

// eslint-disable-next-line import/prefer-default-export
export const dogSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too short')
        .max(20, 'Too long-max 20 chars')
        .matches(noDigitsRegExp, "Name can't include digits"),
    notes: yup.string().min(10, 'Too short').max(150, 'Too long-max 150 chars'),
    age: yup
        .number()
        .min(MIN_DOG_AGE, "Can't be negative")
        .max(MAX_DOG_AGE, 'Max dog age is 20'),
    isVaccinated: yup.boolean(),
    isDesexed: yup.boolean(),
    characteristics: yup
        .array()
        .of(yup.string())
        .max(4, "Can't pick more than 4")
        .test(
            'assert-characteristics-validity',
            'Invalid characteristic',
            assertArrayOfNames
        ),
    image: yup
        .string()
        .required('Please provide image')
        .test(
            'assert-file-image-type',
            `${ALLOWED_IMAGE_FORMATS.join(' / ')}`,
            assertFileImageType
        ),
    gender: yup
        .string()
        .oneOf(GENDERS_VALUES, 'Please pick Male/Female')
        .required('Gender is required'),
    breed: yup
        .string()
        .min(2, 'Too short')
        .max(35, 'Too long-max 35 chars')
        .matches(noDigitsRegExp, "Race can't include digits"),
});
