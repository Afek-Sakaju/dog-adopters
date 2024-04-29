import type { ChangeEvent, MouseEventHandler, ReactNode } from 'react';
import React from 'react';
import type { FormikErrors, FormikTouched } from 'formik';
import { withFormik } from 'formik';
import { useTranslation } from 'react-i18next';

// add types to all the variables declared here
import type { Dog } from '@/types';
import {
    DOGS_BREEDS,
    DOGS_CHARACTERISTICS,
    DOG_MAX_CHARACTERISTICS,
    GENDERS_SELECT_PROPERTIES,
} from '@/utils';
import { dogSchema } from '@/validations';
import {
    AddImageIcon,
    Autocomplete,
    Avatar,
    ButtonsWrapper,
    Checkbox,
    CheckboxesWrapper,
    DeleteButton,
    DesexedIcon,
    FormContainer,
    FormTitle,
    ImageInputWrapper,
    InputResetButton,
    NonDesexedIcon,
    NonVaccinatedIcon,
    Select,
    SubmitButton,
    TextField,
    TextFieldsWrapper,
    UploadImageButton,
    VaccinatedIcon,
} from './DogForm.styled';

interface DogFormValues {
    age: number;
    characteristics: string[];
    gender: string;
    image: string;
    isDesexed: boolean;
    isVaccinated: boolean;
    name: string;
    notes: string;
    race: string;
    status: number;
}

interface DogFormProps {
    formType?: string;
    handleDelete?: () => void;
    handleSubmit?: MouseEventHandler<HTMLButtonElement>;
    isNew?: boolean;
    resetForm?: () => void;
    errors?: FormikErrors<DogFormValues>;
    touched?: FormikTouched<DogFormValues>;
    handleBlur?: (event: ChangeEvent) => void;
    handleChange?: (event: ChangeEvent) => void;
    // eslint-disable-next-line react/no-unused-prop-types
    dogData?: Dog;
    // eslint-disable-next-line react/no-unused-prop-types
    onSubmit?: (values: DogFormValues) => void;
    setFieldValue?: (fieldName: string, value: unknown) => void;
    values?: DogFormValues;
    [key: string]: unknown;
}

const DogForm = (props: DogFormProps): ReactNode => {
    const {
        errors,
        formType,
        handleBlur,
        handleChange,
        handleDelete,
        handleSubmit,
        isNew,
        resetForm,
        setFieldValue,
        touched,
        values,
    } = props;
    const { t } = useTranslation();

    const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const files: File[] = Array.from(e.target.files || []);
        if (files.length === 0) return;

        const [file] = files;

        const reader = new FileReader();

        reader.onloadend = (): void => setFieldValue('image', reader.result);
        reader.readAsDataURL(file);
    };

    const handleGenderChange = (value: string): void =>
        setFieldValue('gender', value);

    const handleCharacteristicsChange = (
        _e: ChangeEvent,
        value: string
    ): void => {
        setFieldValue('characteristics', value);
    };

    const handleRaceChange = (_e: ChangeEvent, value: string): void =>
        setFieldValue('race', value ?? '');

    const areMaxCharacteristicsChosen: boolean =
        values.characteristics?.length >= DOG_MAX_CHARACTERISTICS;
    const disableCharacteristicsAutocomplete = (option: string): boolean => {
        const isOptionNotChosen = !values.characteristics?.find(
            (characteristic: string) => characteristic === option
        );
        return areMaxCharacteristicsChosen && isOptionNotChosen;
    };

    return (
        <FormContainer variant="elevation" elevation={7}>
            <FormTitle>{t(`titles.${formType}_dog`)}</FormTitle>
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
                        // @ts-ignore
                        component="label"
                        error={errors.image && touched.image}
                        helperText={
                            touched.image && errors.image
                                ? errors.image
                                : t('components.dog_form.supported_images')
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
                    optionsProperties={GENDERS_SELECT_PROPERTIES}
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
                helperText={touched.race && errors.race ? errors.race : ' '}
                value={values.race}
            />
            <Autocomplete
                error={errors.characteristics && touched.characteristics}
                freeSolo={!areMaxCharacteristicsChosen}
                fullWidth
                getOptionDisabled={disableCharacteristicsAutocomplete}
                label="Characteristics"
                multiple
                name="characteristics"
                onBlur={handleBlur}
                onChange={handleCharacteristicsChange}
                options={DOGS_CHARACTERISTICS}
                helperText={
                    touched.characteristics && errors.characteristics
                        ? [errors.characteristics]?.flat()[0]
                        : ' '
                }
                value={values.characteristics}
            />
            <TextFieldsWrapper>
                <TextField
                    label="Notes"
                    name="notes"
                    rows={3}
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
                <SubmitButton label={formType} onClick={handleSubmit} />
                <InputResetButton label="Reset" onClick={resetForm} />
                {!isNew ? (
                    <DeleteButton
                        label="Delete"
                        onClick={handleDelete}
                        color="error"
                    />
                ) : null}
            </ButtonsWrapper>
        </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: (props: DogFormProps): DogFormValues => ({
        age: props.dogData?.age || 0,
        characteristics: props.dogData?.characteristics || [],
        gender:
            props.dogData?.gender ||
            (GENDERS_SELECT_PROPERTIES[0].value as string),
        image: props.dogData?.image || '',
        isDesexed: props.dogData?.isDesexed || false,
        isVaccinated: props.dogData?.isVaccinated || false,
        name: props.dogData?.name || '',
        notes: props.dogData?.notes || '',
        race: props.dogData?.race || '',
        status: props.dogData?.status,
    }),
    validationSchema: dogSchema,

    handleSubmit: async (
        values: DogFormValues,
        { props }: { props: DogFormProps }
    ): Promise<void> => {
        const trimmedName: string = values.name.trim();
        props.onSubmit({ ...values, name: trimmedName });
    },

    displayName: 'DogForm',
})(DogForm);
