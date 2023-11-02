import React, { useState } from 'react';

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
    RadioGroupResetButton,
    SubmitButton,
} from './DogsDataFilterForm.styled';

const DogsDataFilterForm = () => {
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(20);
    const [race, setRace] = useState('');
    const [name, setName] = useState('');

    const racesList = [
        { label: 'Yorkie', value: 'Yorkie' },
        { label: 'Shih-Tzu', value: 'Shih-Tzu' },
        { label: 'Golden Retriever', value: 'Golden Retriever' },
    ];

    return (
        <FormContainer>
            <FormTitle>{DOG_FORMS_TITLES.DOGS_DATA_FILTER_FORM}</FormTitle>
            <InputContainer>
                <RadioGroup
                    label="Adoption Status"
                    options={ADOPTION_STATUS_SELECT_PROPERTIES}
                />
                <RadioGroupResetButton>
                    <ClearIcon />
                </RadioGroupResetButton>
            </InputContainer>
            <InputContainer>
                <RadioGroup
                    label="Gender"
                    options={GENDERS_SELECT_PROPERTIES}
                />
                <RadioGroupResetButton>
                    <ClearIcon />
                </RadioGroupResetButton>
            </InputContainer>
            <InputContainer>
                <AgeInputsWrapper>
                    <TextField
                        onChange={(event) => {
                            const inputValue = +event.target.value;
                            if (typeof inputValue === 'number')
                                setMinAge(inputValue);
                        }}
                        type="number"
                        value={minAge}
                        label="From Age"
                    />
                    <TextField
                        onChange={(event) => {
                            const inputValue = +event.target.value;
                            if (typeof inputValue === 'number')
                                setMaxAge(inputValue);
                        }}
                        type="number"
                        value={maxAge}
                        label="To Age"
                    />
                    <InputResetButton>
                        <ClearIcon />
                    </InputResetButton>
                </AgeInputsWrapper>
            </InputContainer>
            <InputContainer>
                <Select
                    optionsProperties={racesList}
                    shouldSetDefaultValue
                    value={race}
                    onChange={setRace}
                    label="Race"
                />
                <InputResetButton>
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <InputContainer>
                <TextField
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    label="Name"
                />
                <InputResetButton>
                    <ClearIcon />
                </InputResetButton>
            </InputContainer>
            <SubmitButton>Apply Filters</SubmitButton>
        </FormContainer>
    );
};

export default DogsDataFilterForm;
