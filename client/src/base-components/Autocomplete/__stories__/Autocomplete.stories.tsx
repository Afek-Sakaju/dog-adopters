import type { ComponentType, ReactNode, ChangeEvent } from 'react';
import React, { useState } from 'react';

import { MUI_COLORS_LIST, MUI_INPUT_VARIANTS } from '@/utils';
import Autocomplete from '../Autocomplete';

export default {
    title: 'base-components/Autocomplete',
    parameters: {
        controls: {
            exclude: /^(name|onChange|options|getOptionLabel)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    width: '600px',
                    height: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: "0 auto",
                    padding: '3em',
                    gap: '1em',
                    border: 'lightgrey 1px solid',
                    borderRadius: '10px',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Autocomplete,
};

const Template = (args: object): ReactNode => {
    const [choice, setChoice] = useState('Option 1');
    const handleChange = (_e: ChangeEvent, value: string) => setChoice(value);

    return (
        <Autocomplete
            options={['Option 1', 'Option 2', 'Option 3']}
            value={choice}
            onChange={handleChange}
            {...args}
        />
    );
};

export const Default = Template.bind({});
Default.argTypes = {
    color: {
        control: 'inline-radio',
        options: MUI_COLORS_LIST,
        defaultValue: 'primary',
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
    focused: {
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
        options: MUI_INPUT_VARIANTS,
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

export const MultipleSelections = (): ReactNode => {
    const [choice1, setChoice1] = useState([]);
    const [choice2, setChoice2] = useState([]);

    const handleChange1 = (_e: ChangeEvent, value: string[]) =>
        setChoice1(value);
    const handleChange2 = (_e: ChangeEvent, value: string[]) =>
        setChoice2(value);

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