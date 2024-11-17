import type { ComponentType, ReactNode } from 'react';
import React from 'react';

import { MUI_CARD_VARIANTS } from '@/utils';
import Card from '../Card';

export default {
    title: 'base-components/Card',
    parameters: {
        controls: { exclude: /^(onClick|children|imageUrl)$/g },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Card,
};

const Template = (args: object): ReactNode => (
    <Card imageUrl="/card-example-image.jpg" {...args} />
);

export const Default = Template.bind({});
Default.argTypes = {
    title: { control: { type: 'text' }, defaultValue: 'Card title' },
    variant: {
        control: 'inline-radio',
        options: MUI_CARD_VARIANTS,
        defaultValue: 'elevation',
    },
    disableRipple: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
};
