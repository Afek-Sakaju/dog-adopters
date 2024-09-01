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
    gender: 'Female',
    isAdopted: false,
    isDesexed: true,
    isVaccinated: true,
    breed: 'Border Collie',
};

export const Default = (): ReactNode => <DogCard image={dogMockedData.image} />;

const Template = (args: object): ReactNode => (
    <DogCard image={dogMockedData.image} {...args} />
);

export const Custom = Template.bind({});
Custom.argTypes = {
    name: { control: { type: 'text' }, defaultValue: dogMockedData.name },
    gender: {
        control: 'inline-radio',
        options: ['Male', 'Female'],
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

export const WithAndWithoutImage = (): ReactNode => {
    return (
        <>
            <DogCard
                name={dogMockedData.name}
                gender={dogMockedData.gender}
                age={dogMockedData.age}
                isAdopted={dogMockedData.isAdopted}
                isDesexed={dogMockedData.isDesexed}
                isVaccinated={dogMockedData.isVaccinated}
                image={dogMockedData.image}
                breed={dogMockedData.breed}
            />
            <DogCard
                name={dogMockedData.name}
                gender={dogMockedData.gender}
                age={dogMockedData.age}
                isAdopted={dogMockedData.isAdopted}
                isDesexed={dogMockedData.isDesexed}
                isVaccinated={dogMockedData.isVaccinated}
                breed={dogMockedData.breed}
            />
        </>
    );
};

export const MoreDogsExamples = (): ReactNode => {
    return (
        <>
            <DogCard
                name={dogMockedData.name}
                gender={dogMockedData.gender}
                age={dogMockedData.age}
                isAdopted={dogMockedData.isAdopted}
                isDesexed={dogMockedData.isDesexed}
                isVaccinated={dogMockedData.isVaccinated}
                image={dogMockedData.image}
                breed={dogMockedData.breed}
            />
            <DogCard
                name="Shabby"
                gender="M"
                age={4}
                isAdopted={false}
                isVaccinated
                image="/dog-card-example-image-2.jpg"
                breed="Yorkshire Terrier"
            />
            <DogCard
                name="Poko"
                gender="M"
                age={0}
                isAdopted
                image="/dog-card-example-image-3.jpg"
                breed="Pomeranian"
            />
        </>
    );
};
