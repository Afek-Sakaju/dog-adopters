import React, { useState } from 'react';

import Select from '../Select';

const MUI_COLORS = ['primary', 'success', 'warning', 'error', 'info'];

export default {
    title: 'base-components/Select',
    parameters: {
        controls: {
            exclude:
                /^(name|onChange|optionsProperties|shouldSetDefaultValue)$/g,
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px',
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
    component: Select,
};

export const Default = () => <Select />;

const Template = (args) => {
    const [choice, setChoice] = useState('Option 1');
    return (
        <Select
            optionsProperties={[
                { label: 'Option 1', value: 'Option 1' },
                { label: 'Option 2', value: 'Option 2' },
                { label: 'Option 3', value: 'Option 3' },
            ]}
            shouldSetDefaultValue
            value={choice}
            onChange={setChoice}
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
    disabled: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    helperText: { control: { type: 'text' }, defaultValue: 'Helper text' },
    label: { control: { type: 'text' }, defaultValue: 'Helper text' },
    fullWidth: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    required: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    variant: {
        control: 'inline-radio',
        options: ['filled', 'standard', 'outlined'],
        defaultValue: 'filled',
    },
};

export const Labeled = () => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');
    return (
        <>
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice1}
                label="Labeled"
                onChange={setChoice1}
            />
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice2}
                onChange={setChoice2}
            />
        </>
    );
};

export const Variants = () => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');
    const [choice3, setChoice3] = useState('Option 1');

    return (
        <>
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice1}
                label="Outlined"
                variant="outlined"
                onChange={setChoice1}
            />
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice2}
                label="Filled"
                variant="filled"
                onChange={setChoice2}
            />
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice3}
                label="Standard"
                variant="standard"
                onChange={setChoice3}
            />
        </>
    );
};

export const FieldStates = () => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');

    return (
        <>
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice1}
                label="Normal"
                onChange={setChoice1}
            />
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice2}
                label="Disabled"
                disabled
                onChange={setChoice2}
            />
            <Select
                optionsProperties={[
                    { label: 'Option 1', value: 'Option 1' },
                    { label: 'Option 2', value: 'Option 2' },
                    { label: 'Option 3', value: 'Option 3' },
                ]}
                shouldSetDefaultValue
                value={choice2}
                label="Required"
                required
                onChange={setChoice2}
            />
        </>
    );
};

export const Colored = () => {
    return (
        <>
            {MUI_COLORS.map((color) => {
                return (
                    <Select
                        key={color}
                        shouldSetDefaultValue
                        value={color}
                        label={color}
                        color={color}
                        optionsProperties={[{ label: color, value: color }]}
                        focused
                    />
                );
            })}
        </>
    );
};
