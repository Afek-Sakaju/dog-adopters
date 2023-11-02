/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import {
    ADOPTION_STATUS_SELECT_PROPERTIES,
    DOG_FORMS_TITLES,
    GENDERS_SELECT_PROPERTIES,
} from '@utils';
import {
    AgeInputsWrapper,
    FormContainer,
    FormTitle,
    RadioGroup,
    InputContainer,
    InputResetButton,
    Select,
    TextField,
    ClearIcon,
    SubmitButton,
} from './DogsDataFilterForm.styled';

const DogsDataFilterForm = (props) => {
    const {
        //	errors,
        //	resetForm,
        //	touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
    } = props;

    const racesList = [
        { label: 'Yorkie', value: 'Yorkie' },
        { label: 'Shih-Tzu', value: 'Shih-Tzu' },
        { label: 'Golden Retriever', value: 'Golden Retriever' },
    ];

    const handleRaceChange = (value) => setFieldValue('race', value);
    const handleMinAgeChange = (event) => {
        const age = +event.target.value;
        const isInvalidAge = typeof age !== 'number' || age < 0 || age > 20;
        if (isInvalidAge) return;

        setFieldValue('minAge', age);
    };
    const handleMaxAgeChange = (event) => {
        const age = +event.target.value;
        const isInvalidAge = typeof age !== 'number' || age < 0 || age > 20;
        if (isInvalidAge) return;

        setFieldValue('maxAge', age);
    };

    return (
        <FormContainer>
            <FormTitle>{DOG_FORMS_TITLES.DOGS_DATA_FILTER_FORM}</FormTitle>
            <InputContainer>
                <RadioGroup
                    label="Adoption Status"
                    options={ADOPTION_STATUS_SELECT_PROPERTIES}
                    name="status"
                />
                <InputResetButton
                    isButtonOfRadioGroup
                    onClick={() => setFieldValue('status', '')}
                >
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <InputContainer>
                <RadioGroup
                    label="Gender"
                    options={GENDERS_SELECT_PROPERTIES}
                    name="gender"
                />
                <InputResetButton
                    isButtonOfRadioGroup
                    onClick={() => setFieldValue('gender', '')}
                >
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <InputContainer>
                <AgeInputsWrapper>
                    <TextField
                        onChange={handleMinAgeChange}
                        type="number"
                        value={values.minAge}
                        label="From Age"
                        name="minAge"
                        onBlur={handleBlur}
                    />
                    <TextField
                        onChange={handleMaxAgeChange}
                        type="number"
                        value={values.maxAge}
                        label="To Age"
                        name="maxAge"
                        onBlur={handleBlur}
                    />
                    <InputResetButton
                        onClick={() => {
                            setFieldValue('minAge', 0);
                            setFieldValue('maxAge', 20);
                        }}
                    >
                        <ClearIcon />
                    </InputResetButton>
                </AgeInputsWrapper>
            </InputContainer>
            <InputContainer>
                <Select
                    optionsProperties={racesList}
                    shouldSetDefaultValue
                    value={values.race}
                    onChange={handleRaceChange}
                    label="Race"
                    name="race"
                    onBlur={handleBlur}
                />
                <InputResetButton onClick={() => setFieldValue('race', '')}>
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <InputContainer>
                <TextField
                    onChange={handleChange}
                    value={values.name}
                    label="Name"
                    name="name"
                />
                <InputResetButton onClick={() => setFieldValue('name', '')}>
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <SubmitButton onClick={handleSubmit}>Apply Filters</SubmitButton>
        </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        minAge: 0,
        maxAge: 20,
        gender: '',
        name: '',
        race: '',
        status: '',
    }),
    // validationSchema: dogSchema,

    handleSubmit: async (values, { props }) => {
        props.onSubmit(values);
    },

    displayName: 'DogsDataFilterForm',
})(DogsDataFilterForm);
