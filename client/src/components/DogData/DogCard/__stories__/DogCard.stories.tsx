import type { ComponentType, ReactNode } from 'react';
import React from 'react';

import { STORYBOOK_PAGE_STYLE } from '@/utils';
import DogCard from '../DogCard';
import { Dog } from '@/types';

export default {
    title: 'base-components/DogCard',
    parameters: {
        controls: { exclude: /^(onClick|children|image)$/g },
    },
    decorators: [
        (Story: ComponentType) => (
            <div style={STORYBOOK_PAGE_STYLE}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 'max-content',
                        gap: '30px',
                        padding: '30px',
                        border: 'lightgrey 1px solid',
                        borderRadius: '10px',
                    }}
                >
                    <Story />
                </div>
            </div>
        ),
    ],
    component: DogCard,
};

const dogMockedData: Dog = {
    name: 'Lady',
    age: 3,
    image: '/dog-card-example-image.jpg',
    gender: 'F',
    isAdopted: false,
    isDesexed: true,
    isVaccinated: true,
    breed: 'Border Collie',
};

const Template = (args: object): ReactNode => (
    <DogCard image={dogMockedData.image} {...args} />
);

export const Default = Template.bind({});
Default.argTypes = {
    name: { control: { type: 'text' }, defaultValue: dogMockedData.name },
    gender: {
        control: 'inline-radio',
        options: ['M', 'F'],
        defaultValue: dogMockedData.gender,
    },
    age: {
        control: { type: 'number', min: 0, max: 20, step: 1 },
        defaultValue: dogMockedData.age,
    },
    isAdopted: {
        control: { type: 'boolean' },
        defaultValue: dogMockedData.isAdopted,
    },
    isDesexed: {
        control: { type: 'boolean' },
        defaultValue: dogMockedData.isDesexed,
    },
    isVaccinated: {
        control: { type: 'boolean' },
        defaultValue: dogMockedData.isVaccinated,
    },
    breed: { control: { type: 'text' }, defaultValue: dogMockedData.breed },
};