import type { ComponentType, ReactNode } from 'react';
import React from 'react';

import {
    MUI_COLORS_LIST,
    MUI_INPUT_MARGIN_LIST,
    MUI_INPUT_TYPES_LIST,
    MUI_INPUT_VARIANTS,
} from '@/utils';
import PasswordField from '../PasswordField';

export default {
    title: 'base-components/PasswordField',
    parameters: {
        controls: {
            exclude: /^(onChange|id|name|autoComplete|startCmp|endCmp)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
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

export const Default = (): ReactNode => <PasswordField />;

const Template = (args: object): ReactNode => <PasswordField {...args} />;

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
        defaultValue: true,
    },
    rows: {
        control: { type: 'number', min: 1, max: 5, step: 1 },
        defaultValue: 1,
    },
    type: {
        control: 'inline-radio',
        options: MUI_INPUT_TYPES_LIST,
        defaultValue: 'password',
    },
    value: { control: { type: 'text' }, defaultValue: '' },
    variant: {
        control: 'inline-radio',
        options: MUI_INPUT_VARIANTS,
        defaultValue: 'outlined',
    },
    label: { control: { type: 'text' }, defaultValue: 'Password' },
};

export const HiddenContent = (): ReactNode => {
    const passwordInitialValue: string = 'password123';

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
