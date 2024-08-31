import type { ChangeEvent, MouseEventHandler, ReactNode } from 'react';
import React, { useState } from 'react';
import type { FormikErrors, FormikTouched } from 'formik';
import { withFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import type { DogFiltersFormValues, RadioGroupOption } from '@/types';
import {
    ADOPTION_STATUS_SELECT_PROPERTIES,
    GENDERS_SELECT_PROPERTIES,
    MAX_DOG_AGE,
    MIN_DOG_AGE,
} from '@/utils';
import { dogFiltersSchema } from '@/validations';
import {
    AgeInputsWrapper,
    Autocomplete,
    ClearIcon,
    ClearIconContainer,
    CloseFiltersIcon,
    FiltrationIcon,
    FormContainer,
    FormInputsContainer,
    FormTitle,
    FormTitleContainer,
    Icon,
    InputContainer,
    OpenFiltersIcon,
    RadioGroup,
    SubmitButton,
    TextField,
} from './DogFiltersForm.styled';

interface DogFiltersFormProps {
    disableSubmit?: boolean;
    elevation?: number;
    errors?: FormikErrors<DogFiltersFormValues>;
    touched?: FormikTouched<DogFiltersFormValues>;
    racesList?: string[];
    handleBlur?: (event: ChangeEvent) => void;
    handleChange?: (event: ChangeEvent) => void;
    handleSubmit?: MouseEventHandler<HTMLButtonElement>;
    // eslint-disable-next-line react/no-unused-prop-types
    onSubmit?: (values: DogFiltersFormValues) => void;
    setFieldValue?: (fieldName: string, value: unknown) => void;
    values?: DogFiltersFormValues;
    shouldHideOnSmallScreens?: boolean;
    [key: string]: unknown;
}

const DogFiltersForm = (props: DogFiltersFormProps): ReactNode => {
    const {
        disableSubmit,
        elevation = 0,
        errors,
        touched,
        racesList,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
        shouldHideOnSmallScreens,
    } = props;

    const [isFiltrationFormOpen, setIsFiltrationFormOpen] = useState(true);
    const { t } = useTranslation();

    const handleGenderChange = (value: string) =>
        setFieldValue('gender', value);
    const handleRaceChange = (_e: ChangeEvent, value: string) =>
        setFieldValue('breed', value || '');

    const handleStatusChange = (value: string) => {
        const valueAsNumber = +value;

        setFieldValue('status', valueAsNumber);
    };

    const handleMinAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const age = +event.target.value;

        const isInvalidAge = typeof age !== 'number';
        const isAgeNotInRange = age < MIN_DOG_AGE || age > MAX_DOG_AGE;
        if (isInvalidAge || isAgeNotInRange) return;

        setFieldValue('minAge', age);
    };

    const handleMaxAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const age = +event.target.value;

        const isInvalidAge = typeof age !== 'number';
        const isAgeNotInRange = age < MIN_DOG_AGE || age > MAX_DOG_AGE;
        if (isInvalidAge || isAgeNotInRange) return;

        setFieldValue('maxAge', age);
    };

    const resetFieldValue = (fieldName: string, newValue: unknown): void => {
        if (!fieldName) return;
        setFieldValue(fieldName, newValue);
    };

    const handleFormOpenStateChange = (): void => {
        setIsFiltrationFormOpen((isOpen) => !isOpen);
    };

    const openStateIconIndicator: ReactNode = isFiltrationFormOpen ? (
        <CloseFiltersIcon />
    ) : (
        <OpenFiltersIcon />
    );

    return (
        <FormContainer
            // @ts-ignore
            shouldHideOnSmallScreens={shouldHideOnSmallScreens}
            elevation={elevation}
        >
            <FormTitleContainer onClick={handleFormOpenStateChange}>
                <FiltrationIcon />
                <FormTitle>{t('titles.dog_form')}</FormTitle>
                {openStateIconIndicator}
            </FormTitleContainer>
            {isFiltrationFormOpen && (
                <FormInputsContainer>
                    <InputContainer>
                        <RadioGroup
                            error={errors.status && touched.status}
                            helperText={
                                touched.status && errors.status
                                    ? errors.status
                                    : ' '
                            }
                            label="Adoption Status"
                            name="status"
                            options={ADOPTION_STATUS_SELECT_PROPERTIES}
                            value={values.status}
                            onChange={handleStatusChange}
                        />
                        <ClearIconContainer isButtonOfRadioGroup>
                            <Icon
                                icon={<ClearIcon />}
                                onClick={() => resetFieldValue('status', '')}
                                tooltipText="Clear Adoption Status"
                            />
                        </ClearIconContainer>
                    </InputContainer>
                    <InputContainer>
                        <RadioGroup
                            error={errors.gender && touched.gender}
                            helperText={
                                touched.gender && errors.gender
                                    ? errors.gender
                                    : ' '
                            }
                            label="Gender"
                            name="gender"
                            options={
                                GENDERS_SELECT_PROPERTIES as RadioGroupOption[]
                            }
                            value={values.gender}
                            onChange={handleGenderChange}
                        />
                        <ClearIconContainer isButtonOfRadioGroup>
                            <Icon
                                onClick={() => resetFieldValue('gender', '')}
                                icon={<ClearIcon />}
                                tooltipText="Clear Gender"
                            />
                        </ClearIconContainer>
                    </InputContainer>
                    <InputContainer>
                        <AgeInputsWrapper>
                            <TextField
                                error={errors.minAge && touched.minAge}
                                helperText={
                                    touched.minAge && errors.minAge
                                        ? errors.minAge
                                        : ' '
                                }
                                label="From Age"
                                name="minAge"
                                onBlur={handleBlur}
                                onChange={handleMinAgeChange}
                                type="number"
                                value={values.minAge}
                            />
                            <TextField
                                error={errors.maxAge && touched.maxAge}
                                helperText={
                                    touched.maxAge && errors.maxAge
                                        ? errors.maxAge
                                        : ' '
                                }
                                label="To Age"
                                name="maxAge"
                                onBlur={handleBlur}
                                onChange={handleMaxAgeChange}
                                type="number"
                                value={values.maxAge}
                            />
                            <ClearIconContainer
                                onClick={() => {
                                    resetFieldValue('minAge', 0);
                                    resetFieldValue('maxAge', 20);
                                }}
                            >
                                <Icon
                                    icon={<ClearIcon />}
                                    tooltipText="Clear Age Range"
                                />
                            </ClearIconContainer>
                        </AgeInputsWrapper>
                    </InputContainer>
                    <InputContainer>
                        <Autocomplete
                            error={errors.breed && touched.breed}
                            helperText={
                                touched.breed && errors.breed ? errors.breed : ' '
                            }
                            fullWidth
                            label="Race"
                            name="breed"
                            onBlur={handleBlur}
                            onChange={handleRaceChange}
                            options={racesList}
                            value={values.breed}
                        />
                        <ClearIconContainer>
                            <Icon
                                onClick={() => resetFieldValue('breed', '')}
                                icon={<ClearIcon />}
                                tooltipText="Clear Race"
                            />
                        </ClearIconContainer>
                    </InputContainer>
                    <InputContainer>
                        <TextField
                            error={errors.name && touched.name}
                            helperText={
                                touched.name && errors.name ? errors.name : ' '
                            }
                            label="Name"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name}
                        />
                        <ClearIconContainer>
                            <Icon
                                onClick={() => resetFieldValue('name', '')}
                                icon={<ClearIcon />}
                                tooltipText="Clear Name"
                            />
                        </ClearIconContainer>
                    </InputContainer>
                    <SubmitButton
                        onClick={handleSubmit}
                        disabled={disableSubmit}
                    >
                        {t('components.dog_filters_form.apply')}
                    </SubmitButton>
                </FormInputsContainer>
            )}
        </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: () =>
        ({
            gender: '',
            maxAge: MAX_DOG_AGE,
            minAge: MIN_DOG_AGE,
            name: '',
            breed: '',
            status: '',
        } as DogFiltersFormValues),
    validationSchema: dogFiltersSchema,

    handleSubmit: async (values, { props }: { props: DogFiltersFormProps }) => {
        props.onSubmit(values);
    },

    displayName: 'DogFiltersForm',
})(DogFiltersForm);
