/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { dogSchema } from '@validations';
import { DogProxy } from '@proxies';
import { Autocomplete } from '@base-components';
import { DOG_BEHAVE_OPTIONS, DOGS_BREEDS } from '@utils';
import {
    Button,
    TextField,
    Paper,
    Title,
    TextFieldsWrapper,
    UploadFileButton,
} from './CreateDogForm.styled';

const CreateDogForm = (props) => {
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        setFieldValue,
    } = props;

    const handleImageInputChange = (e) => {
        const [file] = e.target.files;
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setFieldValue('image', reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <Paper variant="elevation" elevation={7}>
            <Title>Create dog</Title>
            <TextFieldsWrapper>
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
                    error={errors.age && touched.age}
                    helperText={touched.age ? errors.age : ''}
                    label="Age"
                    name="age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    value={values.age}
                />
            </TextFieldsWrapper>
            <Autocomplete
                name="race"
                label="Race"
                onBlur={handleBlur}
                onChange={handleChange}
                textfieldhelpertext={touched.race ? errors.race : ''}
                error={errors.race && touched.race}
                options={DOGS_BREEDS}
                fullWidth
            />
            <TextFieldsWrapper>
                <Autocomplete
                    name="behave"
                    label="Behave"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    textfieldhelpertext={touched.behave ? errors.behave : ''}
                    error={errors.behave && touched.behave}
                    options={DOG_BEHAVE_OPTIONS}
                    fullWidth
                />
                <TextField
                    error={errors.vaccines && touched.vaccines}
                    helperText={touched.vaccines ? errors.vaccines : ''}
                    label="Vaccines"
                    name="vaccines"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    value={values.vaccines}
                />
            </TextFieldsWrapper>
            <UploadFileButton
                component="label"
                error={errors.image && touched.image}
                label="Upload Image"
            >
                <input
                    accept="image/*"
                    hidden
                    name="image"
                    onChange={handleImageInputChange}
                    type="file"
                />
            </UploadFileButton>
            <Button label="Create" onClick={() => handleSubmit()} />
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
