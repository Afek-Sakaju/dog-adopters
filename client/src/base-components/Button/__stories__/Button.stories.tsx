import type { ComponentType, ReactNode } from 'react';
import React from 'react';

import {
    MUI_BUTTON_VARIANTS,
    MUI_COLORS,
    MUI_COLORS_LIST,
    MUI_SIZES_LIST,
} from '@/utils';
import Button from '../Button';

export default {
    title: 'base-components/Button',
    parameters: {
        controls: {
            exclude: /^(onClick|startIcon|endIcon)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
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
    component: Button,
};

const Template = (args: object): ReactNode => <Button {...args} />;

export const Default = Template.bind({});
Default.argTypes = {
    color: {
        control: 'inline-radio',
        options: MUI_COLORS_LIST,
        defaultValue: MUI_COLORS.PRIMARY,
    },
    disabled: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    disableElevation: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    label: { control: { type: 'text' }, defaultValue: 'click' },
    size: {
        control: 'inline-radio',
        options: MUI_SIZES_LIST,
        defaultValue: 'medium',
    },
    variant: {
        control: 'inline-radio',
        options: MUI_BUTTON_VARIANTS,
        defaultValue: 'contained',
    },
};