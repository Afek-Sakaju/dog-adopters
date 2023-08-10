import * as yup from 'yup';

import { assertNameStringInput, assertArrayOfNameStringInput } from '@utils';

const noSpacesRegExp = /^\S*$/;

// eslint-disable-next-line import/prefer-default-export
export const dogSchema = yup.object().shape({
    name: yup
        .string()
        .min(2)
        .max(20)
        .test(
            'assert-dog-name-validity',
            "Invalid dog's name input",
            assertNameStringInput
        ),
    age: yup.number().min(0).max(20),
    isVaccinated: yup.boolean(),
    behave: yup
        .array()
        .of(yup.string().required('Behavior must be a string'))
        .max(4)
        .test(
            'assert-race-validity',
            "Invalid dog's race input",
            assertArrayOfNameStringInput
        ),
    image: yup
        .string()
        .min(20)
        // This limit based on the maximum URL length supported by most modern browsers and servers.
        .max(8192)
        .matches(noSpacesRegExp, 'Image url should not contain spaces'),
    gender: yup.string().oneOf(['F', 'M']).required('Gender is required'),
    race: yup
        .string()
        .min(2)
        .max(20)
        .test(
            'assert-race-validity',
            "Invalid dog's race input",
            assertNameStringInput
        ),
});
