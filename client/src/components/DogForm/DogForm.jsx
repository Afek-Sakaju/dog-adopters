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
    UploadImageButton,
    CheckboxesWrapper,
    ImageInputWrapper,
    AddImageIcon,
    ButtonsWrapper,
    ResetButton,
    SubmitButton,
    DesexedIcon,
    NonDesexedIcon,
    NonVaccinatedIcon,
    VaccinatedIcon,
} from './DogForm.styled';

const DogForm = (props) => {
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        setFieldValue,
        resetForm,
        formType,
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

    console.log(touched);
    return (
        <Paper variant="elevation" elevation={7}>
            <Title>Create dog</Title>
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
                <ImageInputWrapper>
                    <Avatar
                        icon={<AddImageIcon />}
                        size="55px"
                        src={values.image ?? ''}
                    />
                    <UploadImageButton
                        component="label"
                        error={errors.image && touched.image}
                        helperText={
                            touched.image && errors.image
                                ? errors.image
                                : 'Supports: png / jpg / jpeg'
                        }
                        label="Upload image"
                        name="image"
                        onBlur={handleBlur}
                        id="image"
                        onChange={handleImageInputChange}
                    >
                        <input hidden type="file" />
                    </UploadImageButton>
                </ImageInputWrapper>
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
                        checkedIcon={<VaccinatedIcon />}
                        error={errors.isVaccinated && touched.isVaccinated}
                        icon={<NonVaccinatedIcon />}
                        label="Vaccinated"
                        name="isVaccinated"
                        onChange={handleChange}
                        size="large"
                    />
                    <Checkbox
                        checked={values.isDesexed}
                        checkedIcon={<DesexedIcon />}
                        error={errors.isDesexed && touched.isDesexed}
                        icon={<NonDesexedIcon />}
                        label="Desexed"
                        name="isDesexed"
                        onChange={handleChange}
                        size="large"
                    />
                </CheckboxesWrapper>
            </TextFieldsWrapper>
            <ButtonsWrapper>
                <SubmitButton
                    label={formType === 'create' ? 'Create' : 'Update'}
                    onClick={handleSubmit}
                />
                <ResetButton label="Reset" onClick={resetForm} />
            </ButtonsWrapper>
        </Paper>
    );
};

export default withFormik({
    mapPropsToValues: (props) => ({
        age: props?.dogData?.age || 0,
        characteristics: props?.dogData?.characteristics || [],
        gender: props?.dogData?.gender === 'F' ? 'Female' : 'Male',
        image: props?.dogData?.image || '',
        isDesexed: props?.dogData?.isDesexed || false,
        isVaccinated: props?.dogData?.isVaccinated || false,
        name: props?.dogData?.name || '',
        notes: props?.dogData?.notes || '',
        race: props?.dogData?.race || '',
        status: props?.dogData?.status || false,
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
            status,
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
            status,
        };
        const proxyMethod =
            props.formType === 'create' ? 'createDog' : 'updateDog';
        await DogProxy[proxyMethod]({ dogData })
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

    displayName: 'DogForm',
})(DogForm);
