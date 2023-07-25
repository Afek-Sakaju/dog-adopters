/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { dogSchema } from '@validations';
import { DogProxy } from '@proxies';
import {
    Button,
    TextField,
    Paper,
    Title,
    Text,
    Link,
} from './CreateDogForm.styled';

const CreateDogForm = (props) => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;

    //	TODO: add behave and image inputs
    return (
        <Paper variant="elevation" elevation={7}>
            <Title>Create dog</Title>
            <TextField
                error={errors.name && touched.name}
                helperText={touched.name ? errors.name : ''}
                label="Name"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
            />
            <TextField
                error={errors.age && touched.age}
                helperText={touched.age ? errors.age : ''}
                label="Age"
                name="age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                type="number"
            />
            <TextField
                error={errors.vaccines && touched.vaccines}
                helperText={touched.vaccines ? errors.vaccines : ''}
                label="Vaccines"
                name="vaccines"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vaccines}
                type="number"
            />
            <TextField
                error={errors.gender && touched.gender}
                helperText={touched.gender ? errors.gender : ''}
                label="Gender"
                name="gender"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.gender}
            />
            <TextField
                error={errors.race && touched.race}
                helperText={touched.race ? errors.race : ''}
                label="Race"
                name="race"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.race}
            />
            <Text>
                {'Already have an account ? '}
                <Link href="/login" underline="hover">
                    click here
                </Link>
            </Text>
            <Button
                fullWidth
                label="Register"
                onClick={() => handleSubmit()}
                sx={{ padding: '0.7em' }}
            />
        </Paper>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        age: 0,
        vaccines: 0,
        behave: [],
        gender: '',
        race: '',
        image: '',
    }),
    validationSchema: dogSchema,

    handleSubmit: async (values, { props, resetForm }) => {
        const { name, age, vaccines, behave, image, gender, race } = values;
        const dogData = { name, age, vaccines, behave, image, gender, race };

        await DogProxy.createDog({ dogData })
            .then(() => props.setResponseState?.(1))
            .then(() => {
                props.onSubmit?.(dogData);
                resetForm();
            })
            .catch((e) => {
                props.onSubmit?.(null);
                props.setResponseState?.(-1);
                console.error(e);
            });
    },

    displayName: 'CreateDogForm',
})(CreateDogForm);
