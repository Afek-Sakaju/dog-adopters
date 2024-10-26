import type { ComponentType, ReactNode } from 'react';
import React, { useState } from 'react';

import { MUI_COLORS_LIST, MUI_INPUT_VARIANTS } from '@/utils';
import Select from '../Select';

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
    component: Select,
};

const Template = (args: object): ReactNode => {
    const [choice, setChoice] = useState('Option 1');

    return (
        <Select
            optionsProperties={[
                { label: 'Option 1', value: 'Option 1' },
                { label: 'Option 2', value: 'Option 2' },
                { label: 'Option 3', value: 'Option 3' },
            ]}
            defaultValue={choice}
            onChange={setChoice}
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
