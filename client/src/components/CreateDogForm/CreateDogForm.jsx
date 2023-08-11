/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { dogSchema } from '@validations';
import { DogProxy } from '@proxies';
import { Autocomplete, Select, Checkbox } from '@base-components';
import { DOG_BEHAVE_OPTIONS, DOGS_BREEDS, DOG_GENDERS } from '@utils';
import {
    Button,
    TextField,
    Paper,
    Title,
    TextFieldsWrapper,
    Input,
    CheckboxesWrapper,
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

    const handleBehaveChange = (_e, value) => {
        setFieldValue('behave', value);
    };

    const handleRaceChange = (_e, value) => {
        value ||= '';
        setFieldValue('race', value);
    };

    const isMaxBehaveChosen = values.behave?.length > 3;
    const disableBehaveAutocompleteOptions = (option) => {
        const isOptionNotChosen = !values.behave?.find((b) => b === option);

        return isMaxBehaveChosen && isOptionNotChosen;
    };

    const raceInputDefaultHelperText = 'Select race or Write down';
    const behaveInputDefaultHelperText = 'Select behaviors or Write them down';

    return (
        <Paper variant="elevation" elevation={7}>
            <TextFieldsWrapper>
                <Title>Create dog</Title>
                <Input
                    id="image-input"
                    accept="image/*"
                    name="image"
                    onChange={handleImageInputChange}
                    type="file"
                    error={errors.image && touched.image}
                />
            </TextFieldsWrapper>
            <TextField
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
                label="Name"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
            />
            <TextFieldsWrapper>
                <Select
                    name="gender"
                    onChange={handleChange}
                    error={touched.gender && errors.gender}
                    optionsProperties={DOG_GENDERS}
                    title="Gender"
                    fullWidth
                />
                <TextField
                    error={touched.age && errors.age}
                    helperText={touched.age && errors.age}
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
                onChange={handleRaceChange}
                textfieldhelpertext={
                    touched.race && errors.race
                        ? errors.race
                        : raceInputDefaultHelperText
                }
                error={touched.race && errors.race}
                options={DOGS_BREEDS}
                autoSelect
                fullWidth
                freeSolo
            />
            <Autocomplete
                name="behave"
                label="Behave"
                onBlur={handleBlur}
                onChange={handleBehaveChange}
                textfieldhelpertext={
                    touched.behave && errors.behave
                        ? errors.behave
                        : behaveInputDefaultHelperText
                }
                error={touched.behave && errors.behave}
                options={DOG_BEHAVE_OPTIONS}
                getOptionDisabled={disableBehaveAutocompleteOptions}
                freeSolo={!isMaxBehaveChosen}
                fullWidth
                multiple
            />
            <CheckboxesWrapper>
                <Checkbox
                    name="isVaccinated"
                    checked={values.isVaccinated}
                    label="Vaccinated"
                    onChange={handleChange}
                    error={touched.isVaccinated && errors.isVaccinated}
                    size="large"
                />
                <Checkbox
                    name="isDesexed"
                    checked={values.isDesexed}
                    label="Desexed"
                    onChange={handleChange}
                    error={touched.isDesexed && errors.isDesexed}
                    size="large"
                />
            </CheckboxesWrapper>
            <Button label="Create" onClick={() => handleSubmit()} />
        </Paper>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        age: 0,
        isVaccinated: false,
        isDesexed: false,
        behave: [],
        gender: '',
        race: '',
        image: '',
    }),
    validationSchema: dogSchema,

    handleSubmit: async (values, { props, resetForm }) => {
        const {
            name,
            age,
            isVaccinated,
            isDesexed,
            behave,
            image,
            gender,
            race,
        } = values;
        const dogData = {
            name,
            age,
            isVaccinated,
            isDesexed,
            behave,
            image,
            gender,
            race,
        };

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
