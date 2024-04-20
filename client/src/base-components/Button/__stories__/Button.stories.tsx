import type { ComponentType, ReactNode } from 'react';
import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    MUI_BUTTON_VARIANTS,
    MUI_COLORS,
    MUI_COLORS_LIST,
    MUI_SIZES_LIST,
} from '@/utils';
import Button from '../Button';
import { MuiColor } from '@/types';

const actionHandler = action('onClick');

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
    component: Button,
};

export const Default = (): ReactNode => <Button />;

const Template = (args: object): ReactNode => <Button {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
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

export const Labeled = (): ReactNode => {
    return (
        <>
            <Button label="Labeled" onClick={(event) => actionHandler(event)} />
            <Button onClick={(event) => actionHandler(event)} />
        </>
    );
};

export const Variants = (): ReactNode => {
    return (
        <>
            <Button
                label="Text"
                variant="text"
                onClick={(event) => actionHandler(event)}
            />
            <Button
                label="Contained"
                variant="contained"
                onClick={(event) => actionHandler(event)}
            />
            <Button
                label="Outlined"
                variant="outlined"
                onClick={(event) => actionHandler(event)}
            />
        </>
    );
};

export const Disabled = (): ReactNode => {
    return (
        <>
            <Button label="normal" onClick={(event) => actionHandler(event)} />
            <Button
                label="disabled"
                disabled
                onClick={(event) => actionHandler(event)}
            />
        </>
    );
};

export const Colored = (): ReactNode => {
    return MUI_COLORS_LIST.map((color: MuiColor, i: number) => {
        return (
            <Button
                key={i}
                label={color}
                color={color}
                onClick={(event) => actionHandler(event)}
            />
        );
    });
};

export const Sizes = (): ReactNode => {
    return (
        <>
            <Button
                label="Large"
                size="large"
                onClick={(event) => actionHandler(event)}
            />
            <Button
                label="Medium"
                size="medium"
                onClick={(event) => actionHandler(event)}
            />
            <Button
                label="Small"
                size="small"
                onClick={(event) => actionHandler(event)}
            />
        </>
    );
};
