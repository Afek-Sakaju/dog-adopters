import React, { useState } from 'react';

import { STORY_PAGE_STYLE } from '@utils';
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
            <div style={STORY_PAGE_STYLE}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 'max-content',
                        gap: '30px',
                        padding: '40px',
                        border: 'lightgrey 1px solid',
                        borderRadius: '10px',
                    }}
                >
                    <Story />
                </div>
            </div>
        ),
    ],
    component: Card,
};

const cardExampleImage = '/card-example-image.jpg';
const cardMockedText = (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    </p>
);

export const Default = () => <Card />;

const Template = (args) => (
    <Card imageUrl={cardExampleImage} {...args}>
        {cardMockedText}
    </Card>
);

export const Custom = Template.bind({});
Custom.argTypes = {
    title: { control: { type: 'text' }, defaultValue: 'Card title' },
    variant: {
        control: 'inline-radio',
        options: ['outlined', 'standard'],
        defaultValue: 'standard',
    },
    disableRipple: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
};

export const Variants = () => {
    return (
        <>
            <Card title="Standard" imageUrl={cardExampleImage}>
                {cardMockedText}
            </Card>
            <Card
                title="Outlined"
                imageUrl={cardExampleImage}
                variant="outlined"
            >
                {cardMockedText}
            </Card>
        </>
    );
};

export const DisabledRippleEffect = () => {
    return (
        <>
            <Card
                title="Without ripple effect"
                imageUrl={cardExampleImage}
                disableRipple
            >
                {cardMockedText}
            </Card>
            <Card title="With ripple effect" imageUrl={cardExampleImage}>
                {cardMockedText}
            </Card>
        </>
    );
};

export const WithAndWithoutImage = () => {
    return (
        <>
            <Card title="Card with image" imageUrl={cardExampleImage}>
                {cardMockedText}
            </Card>
            <Card title="Card without image">{cardMockedText}</Card>
        </>
    );
};

export const ContainingComponents = () => {
    const [text, setText] = useState('');

    return (
        <>
            <Card title="With buttons inside" imageUrl={cardExampleImage}>
                <div
                    style={{
                        display: 'flex',
                        margin: '15px',
                        gap: '20px',
                    }}
                >
                    <Button
                        color="error"
                        label="Cancel"
                        size="small"
                        variant="contained"
                        component="div"
                    />
                    <Button
                        color="success"
                        label="Continue"
                        size="small"
                        variant="contained"
                        component="div"
                    />
                </div>
            </Card>
            <Card
                title="With text field input inside"
                imageUrl={cardExampleImage}
            >
                <TextField
                    label="Enter text"
                    name="text-field"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    sx={{ marginTop: '10px' }}
                />
            </Card>
            <Card title="With text inside" imageUrl={cardExampleImage}>
                {cardMockedText}
            </Card>
        </>
    );
};
