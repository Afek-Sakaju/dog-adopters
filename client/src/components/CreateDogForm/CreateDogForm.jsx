/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { dogSchema } from '@validations';
import { DogProxy } from '@proxies';
import { Autocomplete, Select, Checkbox, Avatar } from '@base-components';
import {
    DOG_CHARACTERISTICS_OPTIONS,
    DOGS_BREEDS,
    DOG_MAX_CHARACTERISTICS,
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
    const handleCharacteristicsChange = (_e, value) => {
        setFieldValue('characteristics', value);
    };
    const handleRaceChange = (_e, value) => setFieldValue('race', value ?? '');

    const areMaxCharacteristicsChosen =
        values.characteristics?.length >= DOG_MAX_CHARACTERISTICS;
    const disableCharacteristicsAutocompleteOptions = (option) => {
        const isOptionNotChosen = !values.characteristics?.find(
            (b) => b === option
        );
        return areMaxCharacteristicsChosen && isOptionNotChosen;
    };

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
                    helperText={touched.name && errors.name ? errors.name : ' '}
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
                        touched.gender && errors.gender ? errors.gender : ' '
                    }
                    name="gender"
                    onChange={handleGenderChange}
                    optionsProperties={['Male', 'Female']}
                    label="Gender"
                    required
                    shouldSetDefaultValue
                    value={values.gender}
                />
                <TextField
                    error={errors.age && touched.age}
                    helperText={touched.age && errors.age ? errors.age : ' '}
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
                    touched.race && errors.race ? errors.race : ' '
                }
                value={values.race}
            />
            <Autocomplete
                error={errors.characteristics && touched.characteristics}
                freeSolo={!areMaxCharacteristicsChosen}
                fullWidth
                getOptionDisabled={disableCharacteristicsAutocompleteOptions}
                label="Characteristics"
                multiple
                name="characteristics"
                onBlur={handleBlur}
                onChange={handleCharacteristicsChange}
                options={DOG_CHARACTERISTICS_OPTIONS}
                textfieldhelpertext={
                    touched.characteristics && errors.characteristics
                        ? errors.characteristics
                        : ' '
                }
                value={values.characteristics}
            />
            <TextFieldsWrapper>
                <TextField
                    label="Notes"
                    name="notes"
                    rows={4}
                    multiline
                    error={errors.notes && touched.notes}
                    helperText={
                        touched.notes && errors.notes ? errors.notes : ' '
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.notes}
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
            </TextFieldsWrapper>
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
        characteristics: [],
        gender: 'Male',
        image: '',
        isDesexed: false,
        isVaccinated: false,
        name: '',
        notes: '',
        race: '',
    }),
    validationSchema: dogSchema,

    handleSubmit: async (values, { props, resetForm }) => {
        const {
            age,
            characteristics,
            image,
            isDesexed,
            isVaccinated,
            name,
            notes,
            race,
        } = values;
        const gender = values.gender === 'Female' ? 'F' : 'M';
        const dogData = {
            age,
            characteristics,
            gender,
            image,
            isDesexed,
            isVaccinated,
            name,
            notes,
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
