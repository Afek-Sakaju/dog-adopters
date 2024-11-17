import type { ComponentType } from 'react';
import React, { useState } from 'react';

import {
    MUI_COLORS_LIST,
    MUI_RADIO_GROUP_PLACEMENT,
    MUI_SIZES_LIST,
} from '@/utils';
import RadioGroup from '../RadioGroup';

export default {
    title: 'base-components/RadioGroup',
    parameters: {
        controls: { exclude: /^(options|defaultValue|onRadioSelect)$/g },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 auto',
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
    component: RadioGroup,
};

const Template = (args: object) => {
    const [choice, setChoice] = useState('Option 1');

    return (
        <RadioGroup
            options={[
                { label: 'Option 1', value: 'Option 1' },
                { label: 'Option 2', value: 'Option 2' },
                { label: 'Option 3', value: 'Option 3' },
            ]}
            value={choice}
            onRadioSelect={(value: string) => setChoice(value)}
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
    error: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    label: { control: { type: 'text' }, defaultValue: 'RadioGroup label' },
    labelPlacement: {
        control: 'inline-radio',
        options: MUI_RADIO_GROUP_PLACEMENT,
        defaultValue: 'end',
    },
    row: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    size: {
        control: 'inline-radio',
        options: MUI_SIZES_LIST,
        defaultValue: 'medium',
    },
    disabled: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
};
