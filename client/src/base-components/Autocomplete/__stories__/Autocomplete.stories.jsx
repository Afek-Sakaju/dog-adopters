import React, { useState } from 'react';

import Autocomplete from '../Autocomplete';

const MUI_COLORS = ['primary', 'success', 'warning', 'error', 'info'];

export default {
    title: 'base-components/Autocomplete',
    parameters: {
        controls: {
            exclude: /^(name|onChange|options|getOptionLabel)$/g,
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '600px',
                    height: '300px',
                    padding: '3em',
                    gap: '1em',
                    border: 'lightgrey 1px solid',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Autocomplete,
};

export const Default = () => <Autocomplete />;

const Template = (args) => {
    const [choice, setChoice] = useState('Option 1');
    const handleChange = (_e, value) => setChoice(value);

    return (
        <Autocomplete
            options={['Option 1', 'Option 2', 'Option 3']}
            value={choice}
            onChange={handleChange}
            {...args}
        />
    );
};

export const Custom = Template.bind({});
Custom.argTypes = {
    color: {
        control: 'inline-radio',
        options: MUI_COLORS,
        defaultValue: MUI_COLORS?.[0],
    },
    autoComplete: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    autoHighlight: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    autoSelect: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    blurOnSelect: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    clearOnEscape: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    disableCloseOnSelect: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    disableClearable: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    disabled: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    disableListWrap: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    disablePortal: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    freeSolo: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    fullWidth: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    error: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    includeInputInList: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    openOnFocus: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    helperText: {
        control: { type: 'text' },
        defaultValue: 'Helper text',
    },
    label: { control: { type: 'text' }, defaultValue: 'Label' },
    variant: {
        control: 'inline-radio',
        options: ['filled', 'standard', 'outlined'],
        defaultValue: 'filled',
    },
    selectOnFocus: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    limitTags: { control: false },
    multiple: { control: false },
    readOnly: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    placeholder: { control: { type: 'text' }, defaultValue: 'Placeholder' },
};

export const Labeled = () => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');
    const handleChange1 = (_e, value) => setChoice1(value);
    const handleChange2 = (_e, value) => setChoice2(value);

    return (
        <>
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice1}
                label="Labeled"
                onChange={handleChange1}
            />
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice2}
                onChange={handleChange2}
            />
        </>
    );
};

export const Variants = () => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');
    const [choice3, setChoice3] = useState('Option 1');

    const handleChange1 = (_e, value) => setChoice1(value);
    const handleChange2 = (_e, value) => setChoice2(value);
    const handleChange3 = (_e, value) => setChoice3(value);

    return (
        <>
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice1}
                label="Outlined"
                variant="outlined"
                onChange={handleChange1}
            />
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice2}
                label="Filled"
                variant="filled"
                onChange={handleChange2}
            />
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice3}
                label="Standard"
                variant="standard"
                onChange={handleChange3}
            />
        </>
    );
};

export const FieldStates = () => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');
    const [choice3, setChoice3] = useState('Option 1');

    const handleChange1 = (_e, value) => setChoice1(value);
    const handleChange2 = (_e, value) => setChoice2(value);
    const handleChange3 = (_e, value) => setChoice3(value);

    return (
        <>
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice1}
                label="Normal"
                onChange={handleChange1}
            />
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice2}
                label="Read-Only"
                readOnly
                onChange={handleChange2}
            />
            <Autocomplete
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice3}
                label="Disabled"
                disabled
                onChange={handleChange3}
            />
        </>
    );
};

export const MultipleSelections = () => {
    const [choice1, setChoice1] = useState([]);
    const [choice2, setChoice2] = useState([]);

    const handleChange1 = (_e, value) => setChoice1(value);
    const handleChange2 = (_e, value) => setChoice2(value);

    return (
        <>
            <Autocomplete
                label="Multiple selection"
                multiple
                onChange={handleChange1}
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice1}
            />
            <Autocomplete
                label="Multiple selection and free solo"
                freeSolo
                multiple
                onChange={handleChange2}
                options={['Option 1', 'Option 2', 'Option 3']}
                value={choice2}
            />
        </>
    );
};

export const Colored = () => {
    return (
        <>
            {MUI_COLORS.map((color) => {
                return (
                    <Autocomplete
                        key={color}
                        value={color}
                        label={color}
                        color={color}
                        options={[color]}
                        focused
                    />
                );
            })}
        </>
    );
};
