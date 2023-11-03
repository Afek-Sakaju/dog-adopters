import React from 'react';

import { MUI_VARIANTS } from '@utils';
import PasswordField from '../PasswordField';

const MUI_COLORS = ['primary', 'success', 'warning', 'error', 'info'];
const MUI_INPUT_TYPES = ['text', 'email', 'search', 'number', 'password'];

export default {
    title: 'base-components/PasswordField',
    parameters: {
        controls: {
            exclude: /^(onChange|id|name|autoComplete|startCmp|endCmp)$/g,
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '800px',
                    height: '500px',
                    border: 'lightgrey 1px solid',
                    padding: '0.5em',
                    gap: '1em',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: PasswordField,
};

export const Default = () => <PasswordField />;

const Template = (args) => <PasswordField {...args} />;

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
        options: ['normal', 'dense'],
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
        defaultValue: true,
    },
    rows: {
        control: { type: 'number', min: 1, max: 5, step: 1 },
        defaultValue: 1,
    },
    type: {
        control: 'inline-radio',
        options: MUI_INPUT_TYPES,
        defaultValue: 'password',
    },
    value: { control: { type: 'text' }, defaultValue: '' },
    variant: {
        control: 'inline-radio',
        options: MUI_VARIANTS.INPUT,
        defaultValue: 'outlined',
    },
    label: { control: { type: 'text' }, defaultValue: 'Password' },
};

export const HiddenContent = () => {
    const passwordInitialValue = 'password123';

    return (
        <>
            <PasswordField
                value={passwordInitialValue}
                hideByDefault
                label="Hidden by default"
            />
            <PasswordField
                value={passwordInitialValue}
                hideByDefault={false}
                label="Revealed by default"
            />
        </>
    );
};
