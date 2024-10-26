import type { ComponentType, ReactNode } from 'react';
import React from 'react';

import {
    MUI_COLORS_LIST,
    MUI_INPUT_MARGIN_LIST,
    MUI_INPUT_TYPES_LIST,
    MUI_INPUT_VARIANTS,
} from '@/utils';
import TextField from '../TextField';

export default {
    title: 'base-components/TextField',
    parameters: {
        controls: {
            exclude: /^(onChange|id|name|autoComplete|startCmp|endCmp)$/g,
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
    component: TextField,
};

const Template = (args: object): ReactNode => <TextField {...args} />;

export const Default = Template.bind({});
Default.argTypes = {
    color: {
        control: 'inline-radio',
        options: MUI_COLORS_LIST,
        defaultValue: 'primary',
    },
    disabled: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    error: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    focused: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    fullWidth: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    helperText: { control: { type: 'text' }, defaultValue: 'Helper-Text' },
    margin: {
        control: 'inline-radio',
        options: MUI_INPUT_MARGIN_LIST,
        defaultValue: 'normal',
    },
    maxRows: {
        control: { type: 'number', min: 1, max: 5, step: 1 },
        defaultValue: 5,
    },
    multiline: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    readOnly: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    required: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    rows: {
        control: { type: 'number', min: 1, max: 5, step: 1 },
        defaultValue: 1,
    },
    type: {
        control: 'inline-radio',
        options: MUI_INPUT_TYPES_LIST,
        defaultValue: 'text',
    },
    value: { control: { type: 'text' }, defaultValue: 'Value' },
    variant: {
        control: 'inline-radio',
        options: MUI_INPUT_VARIANTS,
        defaultValue: 'outlined',
    },
    label: { control: { type: 'text' }, defaultValue: 'Label' },
};