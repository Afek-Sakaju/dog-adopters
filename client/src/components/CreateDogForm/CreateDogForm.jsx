/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { dogSchema } from '@validations';
import { DogProxy } from '@proxies';
import { Autocomplete, Select, Checkbox, Avatar } from '@base-components';
import {
    DOG_BEHAVE_OPTIONS,
    DOGS_BREEDS,
    DOG_GENDERS,
    DEFAULT_INPUTS_HELPER_TEXT,
    DOG_CREATION_MAX_BEHAVE_TYPES,
} from '@utils';
import {
    TextField,
    Paper,
    Title,
    TextFieldsWrapper,
    Input,
    CheckboxesWrapper,
    ImageBox,
    HeaderWrapper,
    AddImageIcon,
    ButtonsWrapper,
    ResetButton,
    SubmitButton,
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
        resetForm,
    } = props;

    const handleImageInputChange = (e) => {
        const [file] = e.target.files;
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => setFieldValue('image', reader.result);
        reader.readAsDataURL(file);
    };

    const handleGenderChange = (value) => setFieldValue('gender', value);
    const handleBehaveChange = (_e, value) => setFieldValue('behave', value);
    const handleRaceChange = (_e, value) => setFieldValue('race', value ?? '');

    const isMaxBehaveChosen =
        values.behave?.length >= DOG_CREATION_MAX_BEHAVE_TYPES;
    const disableBehaveAutocompleteOptions = (option) => {
        const isOptionNotChosen = !values.behave?.find((b) => b === option);

        return isMaxBehaveChosen && isOptionNotChosen;
    };
    console.log(errors);
    return (
        <Paper variant="elevation" elevation={7}>
            <HeaderWrapper>
                <Title>Create dog</Title>
                <ImageBox>
                    <Avatar
                        icon={<AddImageIcon />}
                        size="100px"
                        src={values.image ?? ''}
                    />
                </ImageBox>
            </HeaderWrapper>
            <TextFieldsWrapper>
                <TextField
                    error={errors.name && touched.name}
                    helperText={
                        touched.name && errors.name
                            ? errors.name
                            : DEFAULT_INPUTS_HELPER_TEXT.name
                    }
                    label="Name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                />
                <Input
                    accept="image/*"
                    error={errors.image && touched.image}
                    id="image-input"
                    name="image"
                    onChange={handleImageInputChange}
                    type="file"
                />
            </TextFieldsWrapper>
            <TextFieldsWrapper>
                <Select
                    error={errors.gender && touched.gender}
                    helperText={
                        touched.gender && errors.gender
                            ? errors.gender
                            : DEFAULT_INPUTS_HELPER_TEXT.gender
                    }
                    name="gender"
                    onChange={handleGenderChange}
                    optionsProperties={DOG_GENDERS}
                    label="Gender"
                    shouldSetDefaultValue
                    value={values.gender}
                />
                <TextField
                    error={errors.age && touched.age}
                    helperText={
                        touched.age && errors.age
                            ? errors.age
                            : DEFAULT_INPUTS_HELPER_TEXT.age
                    }
                    label="Age"
                    name="age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    value={values.age}
                />
            </TextFieldsWrapper>
            <Autocomplete
                autoSelect
                error={errors.race && touched.race}
                freeSolo
                fullWidth
                label="Race"
                name="race"
                onBlur={handleBlur}
                onChange={handleRaceChange}
                options={DOGS_BREEDS}
                textfieldhelpertext={
                    touched.race && errors.race
                        ? errors.race
                        : DEFAULT_INPUTS_HELPER_TEXT.race
                }
                value={values.race}
            />
            <Autocomplete
                error={errors.behave && touched.behave}
                freeSolo={!isMaxBehaveChosen}
                fullWidth
                getOptionDisabled={disableBehaveAutocompleteOptions}
                label="Behave"
                multiple
                name="behave"
                onBlur={handleBlur}
                onChange={handleBehaveChange}
                options={DOG_BEHAVE_OPTIONS}
                textfieldhelpertext={
                    touched.behave && errors.behave
                        ? errors.behave
                        : DEFAULT_INPUTS_HELPER_TEXT.behave
                }
                value={values.behave}
            />
            <CheckboxesWrapper>
                <Checkbox
                    checked={values.isVaccinated}
                    error={errors.isVaccinated && touched.isVaccinated}
                    label="Vaccinated"
                    name="isVaccinated"
                    onChange={handleChange}
                    size="large"
                />
                <Checkbox
                    checked={values.isDesexed}
                    error={errors.isDesexed && touched.isDesexed}
                    label="Desexed"
                    name="isDesexed"
                    onChange={handleChange}
                    size="large"
                />
            </CheckboxesWrapper>
            <ButtonsWrapper>
                <SubmitButton label="Create" onClick={handleSubmit} />
                <ResetButton label="Reset" onClick={resetForm} />
            </ButtonsWrapper>
        </Paper>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        age: 0,
        behave: [],
        gender: 'M',
        image: '',
        isDesexed: false,
        isVaccinated: false,
        name: '',
        race: '',
    }),
    validationSchema: dogSchema,

    handleSubmit: async (values, { props, resetForm }) => {
        const {
            age,
            behave,
            gender,
            image,
            isDesexed,
            isVaccinated,
            name,
            race,
        } = values;
        const dogData = {
            age,
            behave,
            gender,
            image,
            isDesexed,
            isVaccinated,
            name,
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
