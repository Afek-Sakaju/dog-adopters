import * as yup from 'yup';

import {
    assertNameStringInput,
    assertArrayOfNameStringInput,
    assertFileImageType,
    ALLOWED_IMAGE_FORMATS,
} from '@utils';

// eslint-disable-next-line import/prefer-default-export
export const dogSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Name can't be one character")
        .max(20, "Name can't be more then 20 characters")
        .test(
            'assert-dog-name-validity',
            "Invalid dog's name input",
            assertNameStringInput
        ),
    notes: yup
        .string()
        .min(10, "Notes can't be shorter then 10 characters")
        .max(150, 'Maximum notes length is 150 characters'),
    age: yup
        .number('Age must be a valid number')
        .min(0, "Age can't be a negative number")
        .max(20, 'Max dog age is 20'),
    isVaccinated: yup.boolean(),
    characteristics: yup
        .array()
        .of(yup.string('Characteristic must be a string'))
        .max(4, 'Maximum 4 Characteristics allowed')
        .test(
            'assert-characteristics-validity',
            "Invalid dog's characteristic",
            assertArrayOfNameStringInput
        ),
    image: yup
        .mixed()
        .required('You must provide image')
        .test(
            'assert-file-image-type',
            `Supports: ${ALLOWED_IMAGE_FORMATS.join(' / ')}`,
            assertFileImageType
        ),
    gender: yup
        .string('Gender must be a valid string')
        .oneOf(['F', 'M'], 'Gender must be Male or Female')
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
