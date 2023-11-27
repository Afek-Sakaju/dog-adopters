import React from 'react';

import { STORYBOOK_PAGE_STYLE } from '@utils';
import DogCard from '../DogCard';

export default {
    title: 'base-components/DogCard',
    parameters: {
        controls: { exclude: /^(onClick|children|image)$/g },
    },
    decorators: [
        (Story) => (
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

const dogMockedData = {
    name: 'Lady',
    age: 3,
    image: '/dog-card-example-image.jpg',
    gender: 'Female',
    isAdopted: false,
    isDesexed: true,
    isVaccinated: true,
    race: 'Border Collie',
};

export const Default = () => <DogCard />;

const Template = (args) => <DogCard image={dogMockedData.image} {...args} />;

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
    race: { control: { type: 'text' }, defaultValue: dogMockedData.race },
};

export const WithAndWithoutImage = () => {
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
                race={dogMockedData.race}
            />
            <DogCard
                name={dogMockedData.name}
                gender={dogMockedData.gender}
                age={dogMockedData.age}
                isAdopted={dogMockedData.isAdopted}
                isDesexed={dogMockedData.isDesexed}
                isVaccinated={dogMockedData.isVaccinated}
                race={dogMockedData.race}
            />
        </>
    );
};

export const MoreDogsExamples = () => {
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
                race={dogMockedData.race}
            />
            <DogCard
                name="Shabby"
                gender="Male"
                age={4}
                isAdopted={false}
                isVaccinated
                image="/dog-card-example-image-2.jpg"
                race="Yorkshire Terrier"
            />
            <DogCard
                name="Poko"
                gender="Male"
                age={0}
                isAdopted
                image="/dog-card-example-image-3.jpg"
                race="Pomeranian"
            />
        </>
    );
};
