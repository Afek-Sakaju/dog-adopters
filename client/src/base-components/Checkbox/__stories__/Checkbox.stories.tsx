import type { ComponentType, ReactNode } from 'react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import type { MuiColor } from '@/types';
import { MUI_COLORS_LIST, MUI_SIZES_LIST } from '@/utils';

import Checkbox from '../Checkbox';

const actionHandler = action('onChange');

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
                    flexDirection: 'column',
                    width: '800px',
                    height: '500px',
                    padding: '3em',
                    gap: '1em',
                    border: 'lightgrey 1px solid',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Checkbox,
};

export const Default = (): ReactNode => <Checkbox />;

const Template = (args: object): ReactNode => <Checkbox {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
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
    label: { control: { type: 'text' }, defaultValue: 'check' },
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

export const Labeled = (): ReactNode => {
    const [checkedLabeled, setCheckedLabeled] = useState(false);
    const [checkedUnlabeled, setCheckedUnlabeled] = useState(false);

    return (
        <>
            <Checkbox
                checked={checkedLabeled}
                onChange={(event) => {
                    setCheckedLabeled(event.target.checked);
                    actionHandler(event);
                }}
                label="Labeled"
            />
            <Checkbox
                checked={checkedUnlabeled}
                onChange={(event) => {
                    setCheckedUnlabeled(event.target.checked);
                    actionHandler(event);
                }}
            />
        </>
    );
};

export const Checked = (): ReactNode => {
    return (
        <>
            <Checkbox label="Checked" checked />
            <Checkbox label="Unchecked" checked={false} />
        </>
    );
};

export const Colored = (): ReactNode => {
    return MUI_COLORS_LIST.map((color: MuiColor, i: number) => (
        <Checkbox key={i} label={color} checked color={color} />
    ));
};

export const FieldStates = (): ReactNode => {
    return (
        <>
            <Checkbox label="normal" checked />
            <Checkbox label="normal" checked={false} />
            <Checkbox label="required" required checked />
            <Checkbox label="required" required checked={false} />
            <Checkbox label="disabled" disabled checked />
            <Checkbox label="disabled" disabled checked={false} />
        </>
    );
};

export const Sizes = (): ReactNode => {
    const [checkedLarge, setCheckedLarge] = useState(false);
    const [checkedMedium, setCheckedMedium] = useState(false);
    const [checkedSmall, setCheckedSmall] = useState(false);

    return (
        <>
            <Checkbox
                checked={checkedLarge}
                onChange={(event) => {
                    setCheckedLarge(event.target.checked);
                    actionHandler(event);
                }}
                label="Large"
                size="large"
            />
            <Checkbox
                checked={checkedMedium}
                onChange={(event) => {
                    setCheckedMedium(event.target.checked);
                    actionHandler(event);
                }}
                label="Medium"
                size="medium"
            />
            <Checkbox
                checked={checkedSmall}
                onChange={(event) => {
                    setCheckedSmall(event.target.checked);
                    actionHandler(event);
                }}
                label="Small"
                size="small"
            />
        </>
    );
};
