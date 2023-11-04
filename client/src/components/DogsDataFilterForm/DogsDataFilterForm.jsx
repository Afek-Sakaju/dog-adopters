/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { dogDataFiltersSchema } from '@validations';
import {
    ADOPTION_STATUS_SELECT_PROPERTIES,
    COMPONENTS_CONTENT,
    GENDERS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
    TITLES,
} from '@utils';
import {
    AgeInputsWrapper,
    FormContainer,
    FormTitle,
    RadioGroup,
    InputContainer,
    InputResetButton,
    Autocomplete,
    TextField,
    ClearIcon,
    SubmitButton,
} from './DogsDataFilterForm.styled';

const DogsDataFilterForm = (props) => {
    const {
        //	errors,
        //	resetForm,
        //	touched,
        racesList,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
    } = props;

    const handleGenderChange = (value) => setFieldValue('gender', value);
    const handleRaceChange = (_e, value) => setFieldValue('race', value);

    const handleStatusChange = (value) => {
        const isEmptyStatus = value !== 0 && !value;
        if (!isEmptyStatus) value = +value;

        setFieldValue('status', value);
    };

    const handleMinAgeChange = (event) => {
        const age = +event.target.value;

        const isInvalidAge = typeof age !== 'number';
        const isAgeNotInRange = age < MIN_DOG_AGE || age > MAX_DOG_AGE;
        if (isInvalidAge || isAgeNotInRange) return;

        setFieldValue('minAge', age);
    };

    const handleMaxAgeChange = (event) => {
        const age = +event.target.value;

        const isInvalidAge = typeof age !== 'number';
        const isAgeNotInRange = age < MIN_DOG_AGE || age > MAX_DOG_AGE;
        if (isInvalidAge || isAgeNotInRange) return;

        setFieldValue('maxAge', age);
    };

    const resetFieldValue = (fieldName, newValue = '') => {
        if (!fieldName) return;
        setFieldValue(fieldName, newValue);
    };

    return (
        <FormContainer>
            <FormTitle>{TITLES.DOGS_DATA_FILTER_FORM}</FormTitle>
            <InputContainer>
                <RadioGroup
                    label="Adoption Status"
                    name="status"
                    options={ADOPTION_STATUS_SELECT_PROPERTIES}
                    value={values.status}
                    onChange={handleStatusChange}
                />
                <InputResetButton
                    isButtonOfRadioGroup
                    onClick={() => resetFieldValue('status')}
                >
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <InputContainer>
                <RadioGroup
                    label="Gender"
                    name="gender"
                    options={GENDERS_SELECT_PROPERTIES}
                    value={values.gender}
                    onChange={handleGenderChange}
                />
                <InputResetButton
                    isButtonOfRadioGroup
                    onClick={() => resetFieldValue('gender')}
                >
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <InputContainer>
                <AgeInputsWrapper>
                    <TextField
                        label="From Age"
                        name="minAge"
                        onBlur={handleBlur}
                        onChange={handleMinAgeChange}
                        type="number"
                        value={values.minAge}
                    />
                    <TextField
                        label="To Age"
                        name="maxAge"
                        onBlur={handleBlur}
                        onChange={handleMaxAgeChange}
                        type="number"
                        value={values.maxAge}
                    />
                    <InputResetButton
                        onClick={() => {
                            resetFieldValue('minAge', 0);
                            resetFieldValue('maxAge', 20);
                        }}
                    >
                        <ClearIcon />
                    </InputResetButton>
                </AgeInputsWrapper>
            </InputContainer>
            <InputContainer>
                <Autocomplete
                    fullWidth
                    label="Race"
                    name="race"
                    onBlur={handleBlur}
                    onChange={handleRaceChange}
                    options={racesList}
                    value={values.race || null}
                />
                <InputResetButton onClick={() => resetFieldValue('race')}>
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                />
                <InputResetButton onClick={() => resetFieldValue('name')}>
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <SubmitButton onClick={handleSubmit}>
                {COMPONENTS_CONTENT.DOG_FILTER_FORM_SUBMIT}
            </SubmitButton>
        </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        gender: '',
        maxAge: MAX_DOG_AGE,
        minAge: MIN_DOG_AGE,
        name: '',
        race: '',
        status: '',
    }),
    validationSchema: dogDataFiltersSchema,

    handleSubmit: async (values, { props }) => {
        props.onSubmit(values);
    },

    displayName: 'DogsDataFilterForm',
})(DogsDataFilterForm);
