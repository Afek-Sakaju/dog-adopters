import type { ComponentType, ReactNode } from 'react';
import React, { useState } from 'react';

import type { SelectOption } from '@/types';
import { MUI_COLORS_LIST, MUI_INPUT_VARIANTS } from '@/utils';
import Select from '../Select';

const mockSelectOptions: SelectOption[] = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
];

export default {
    title: 'base-components/Select',
    parameters: {
        controls: {
            exclude:
                /^(name|onChange|optionsProperties|shouldSetDefaultValue)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
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

export const Default = (): ReactNode => <Select />;

const Template = (args: object): ReactNode => {
    const [choice, setChoice] = useState('Option 1');

    return (
        <Select
            optionsProperties={mockSelectOptions}
            defaultValue={choice}
            onChange={setChoice}
            {...args}
        />
    );
};

export const Custom = Template.bind({});
Custom.argTypes = {
    color: {
        control: 'inline-radio',
        options: MUI_COLORS_LIST,
        defaultValue: 'primary',
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
        options: MUI_INPUT_VARIANTS,
        defaultValue: 'filled',
    },
};

export const Labeled = (): ReactNode => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');

    return (
        <>
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice1}
                label="Labeled"
                onChange={setChoice1}
            />
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice2}
                onChange={setChoice2}
            />
        </>
    );
};

export const Variants = (): ReactNode => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');
    const [choice3, setChoice3] = useState('Option 1');

    return (
        <>
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice1}
                label="Outlined"
                variant="outlined"
                onChange={setChoice1}
            />
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice2}
                label="Filled"
                variant="filled"
                onChange={setChoice2}
            />
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice3}
                label="Standard"
                variant="standard"
                onChange={setChoice3}
            />
        </>
    );
};

export const FieldStates = (): ReactNode => {
    const [choice1, setChoice1] = useState('Option 1');
    const [choice2, setChoice2] = useState('Option 1');

    return (
        <>
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice1}
                label="Normal"
                onChange={setChoice1}
            />
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice2}
                label="Disabled"
                disabled
                onChange={setChoice2}
            />
            <Select
                optionsProperties={mockSelectOptions}
                defaultValue={choice2}
                label="Required"
                required
                onChange={setChoice2}
            />
        </>
    );
};

export const Colored = (): ReactNode => {
    return (
        <>
            {MUI_COLORS_LIST.map((color) => {
                return (
                    <Select
                        key={color}
                        defaultValue={color}
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
