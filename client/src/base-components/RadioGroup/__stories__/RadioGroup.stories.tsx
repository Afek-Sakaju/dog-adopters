import type { ComponentType, ReactNode } from 'react';
import React from 'react';

import type { MuiRadioGroupPlacement, RadioGroupOption } from '@/types';
import {
    MUI_COLORS_LIST,
    MUI_RADIO_GROUP_PLACEMENT,
    MUI_RADIO_GROUP_SIZES,
    MUI_SIZES_LIST,
    capitalizeFirstLetter,
} from '@/utils';
import RadioGroup from '../RadioGroup';
import {
    ColumnBox,
    InlineBox,
    StoryContentWrapper,
    StoryPage,
} from './RadioGroup.stories.styled';

const simpleOptionsExample: RadioGroupOption[] = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
];

export default {
    title: 'base-components/RadioGroup',
    parameters: {
        controls: { exclude: /^(options|defaultValue|onRadioSelect)$/g },
    },
    decorators: [
        (Story: ComponentType) => (
            <StoryPage>
                <StoryContentWrapper>
                    <Story />
                </StoryContentWrapper>
            </StoryPage>
        ),
    ],
    component: RadioGroup,
};

export const Default = (): ReactNode => <RadioGroup />;

const Template = (args: object) => (
    <RadioGroup options={simpleOptionsExample} {...args} />
);

export const Custom = Template.bind({});
Custom.argTypes = {
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

export const Labeled = (): ReactNode => {
    const coloredOptions: RadioGroupOption[] = [
        { label: 'Labeled', value: 'Labeled' },
        { label: '', value: 'Unlabeled' },
    ];

    return <RadioGroup options={coloredOptions} />;
};

export const RowDisplay = (): ReactNode => {
    return (
        <ColumnBox>
            <RadioGroup label="Normal" options={simpleOptionsExample} />
            <RadioGroup label="Row" options={simpleOptionsExample} row />
        </ColumnBox>
    );
};

export const Disabled = (): ReactNode => {
    return (
        <InlineBox>
            <RadioGroup label="Normal" options={simpleOptionsExample} />
            <RadioGroup
                label="Disabled"
                options={simpleOptionsExample}
                disabled
            />
        </InlineBox>
    );
};

export const Error = (): ReactNode => {
    return (
        <InlineBox>
            <RadioGroup label="Normal" options={simpleOptionsExample} />
            <RadioGroup label="Error" options={simpleOptionsExample} error />
        </InlineBox>
    );
};

export const LabelPlacements = (): ReactNode => {
    return (
        <InlineBox>
            {MUI_RADIO_GROUP_PLACEMENT.map(
                (placement: MuiRadioGroupPlacement) => (
                    <RadioGroup
                        key={placement}
                        options={simpleOptionsExample}
                        label={capitalizeFirstLetter(placement)}
                        labelPlacement={placement}
                    />
                )
            )}
        </InlineBox>
    );
};

export const Colored = (): ReactNode => {
    // All set to the same value, to display them as active and observe their colors.
    const mutualValue: string = 'coloredRadio';
    const colorsOptions: RadioGroupOption[] = MUI_COLORS_LIST.map((color) => {
        return {
            label: capitalizeFirstLetter(color),
            value: mutualValue,
            color,
        };
    });

    return <RadioGroup options={colorsOptions} defaultValue={mutualValue} />;
};

export const Sizes = (): ReactNode => {
    const reversedSizesList = [...MUI_RADIO_GROUP_SIZES].reverse();
    const sizesOptions = reversedSizesList.map((size) => {
        return { label: capitalizeFirstLetter(size), value: size, size };
    });

    return <RadioGroup options={sizesOptions} />;
};
