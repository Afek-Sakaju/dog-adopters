import type { ComponentType, ReactNode } from 'react';
import React from 'react';

import { MUI_COLORS_LIST, MUI_SIZES_LIST } from '@/utils';
import Checkbox from '../Checkbox';

export default {
    title: 'base-components/Checkbox',
    parameters: {
        controls: {
            exclude: /^(onChange|icon|checkedIcon|defaultChecked|fontSize)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: '100px',
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
    component: Checkbox,
};

const Template = (args: object): ReactNode => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.argTypes = {
    checked: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    color: {
        control: 'inline-radio',
        options: MUI_COLORS_LIST,
        defaultValue: 'primary',
    },
    disabled: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    label: { control: { type: 'text' }, defaultValue: 'Label' },
    required: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    size: {
        control: 'inline-radio',
        options: MUI_SIZES_LIST,
        defaultValue: 'small',
    },
};