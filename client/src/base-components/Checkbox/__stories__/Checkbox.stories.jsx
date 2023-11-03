import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { MUI_COLORS, MUI_SIZES } from '@utils';
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
        (Story) => (
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

export const Default = () => <Checkbox />;

const Template = (args) => <Checkbox {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
    checked: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
    color: {
        control: 'inline-radio',
        options: MUI_COLORS,
        defaultValue: MUI_COLORS?.[0],
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
        options: MUI_SIZES,
        defaultValue: 'small',
    },
};

export const Labeled = () => {
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

export const Checked = () => {
    return (
        <>
            <Checkbox label="Checked" checked />
            <Checkbox label="Unchecked" checked={false} />
        </>
    );
};

export const Colored = () => {
    return MUI_COLORS.map((c, i) => (
        <Checkbox key={i} label={c} checked color={c} />
    ));
};

export const FieldStates = () => {
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

export const Sizes = () => {
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
