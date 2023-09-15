import React, { useState } from 'react';

import Card from '../Card';
import Button from '../../Button/Button';
import TextField from '../../TextField/TextField';

export default {
    title: 'base-components/Card',
    parameters: {
        controls: { exclude: /^(onClick|children|imageUrl)$/g },
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', maxWidth: '80vw', height: '130vh' }}>
                <Story />
            </div>
        ),
    ],
    component: Card,
};

const cardExampleImage = '/card-example-image.jpeg';
const cardMockedInformation =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const Default = () => <Card />;

const Template = (args) => <Card imageUrl={cardExampleImage} {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
    title: { control: { type: 'text' }, defaultValue: 'Card title' },
    information: {
        control: { type: 'text' },
        defaultValue: cardMockedInformation,
    },
    variant: {
        control: 'inline-radio',
        options: ['outlined', 'standard'],
        defaultValue: 'outlined',
    },
    disableRipple: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
};

export const Variants = () => {
    return (
        <>
            <Card
                title="Standard"
                information={cardMockedInformation}
                imageUrl={cardExampleImage}
            />
            <Card
                title="Outlined"
                information={cardMockedInformation}
                imageUrl={cardExampleImage}
                variant="outlined"
            />
        </>
    );
};

export const DisabledRippleEffect = () => {
    return (
        <>
            <Card
                title="Without ripple effect"
                information={cardMockedInformation}
                imageUrl={cardExampleImage}
                disableRipple
            />
            <Card
                title="With ripple effect"
                information={cardMockedInformation}
                imageUrl={cardExampleImage}
            />
        </>
    );
};

export const WithAndWithoutData = () => {
    return (
        <>
            <Card
                title="Card with all data"
                information={cardMockedInformation}
                imageUrl={cardExampleImage}
            />
            <Card
                title="Card without information"
                imageUrl={cardExampleImage}
            />
            <Card
                imageUrl={cardExampleImage}
                information="Card without title"
            />
            <Card
                title="Card without image"
                information={cardMockedInformation}
            />
        </>
    );
};

export const WithChildren = () => {
    const [text, setText] = useState('');

    return (
        <>
            <Card title="With buttons as children" imageUrl={cardExampleImage}>
                <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                    <Button
                        color="error"
                        label="Cancel"
                        size="small"
                        variant="contained"
                    />
                    <Button
                        color="success"
                        label="Continue"
                        size="small"
                        variant="contained"
                    />
                </div>
            </Card>
            <Card
                title="With text field input as children"
                imageUrl={cardExampleImage}
            >
                <TextField
                    label="Enter text"
                    name="text-field"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    sx={{ marginTop: '5px', width: '70%' }}
                />
            </Card>
        </>
    );
};
