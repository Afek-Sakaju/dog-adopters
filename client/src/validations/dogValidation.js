import * as yup from 'yup';

import { assertNameStringInput, assertArrayOfNameStringInput } from '@utils';

const noSpacesRegExp = /^\S*$/;

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
    age: yup
        .number('Age must be a valid number')
        .min(0, "Age can't be a negative number")
        .max(20, 'Max dog age is 20'),
    isVaccinated: yup.boolean(),
    behave: yup
        .array()
        .of(yup.string('Behavior type must be a string'))
        .max(4, 'Maximum 4 behavior types allowed')
        .test(
            'assert-race-validity',
            "Invalid dog's behavior type",
            assertArrayOfNameStringInput
        ),
    image: yup
        .string()
        .min(20)
        // This limit based on the maximum URL length supported by most modern browsers and servers.
        .max(8192)
        .matches(noSpacesRegExp, 'Image url should not contain spaces'),
    gender: yup
        .string('Gender must be a valid string')
        .oneOf(['F', 'M'])
        .required('Gender is required'),
    race: yup
        .string('Race must be a valid string')
        .min(2, "Race can't be one character")
        .max(20, "Race can't be more then 20 characters")
        .test(
            'assert-race-validity',
            "Invalid dog's race input",
            assertNameStringInput
        ),
});
