import type { ComponentType, ReactNode } from 'react';
import React, { useState } from 'react';

import { MUI_CARD_VARIANTS, STORYBOOK_PAGE_STYLE } from '@/utils';
import Button from '../../Button/Button';
import TextField from '../../TextField/TextField';
import Card from '../Card';

export default {
    title: 'base-components/Card',
    parameters: {
        controls: { exclude: /^(onClick|children|imageUrl)$/g },
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

const cardExampleImage: string = '/card-example-image.jpg';
const cardMockedText: ReactNode = (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
    </p>
);

export const Default = (): ReactNode => <Card />;

const Template = (args: object): ReactNode => (
    <Card imageUrl={cardExampleImage} {...args}>
        {cardMockedText}
    </Card>
);

export const Custom = Template.bind({});
Custom.argTypes = {
    title: { control: { type: 'text' }, defaultValue: 'Card title' },
    variant: {
        control: 'inline-radio',
        options: MUI_CARD_VARIANTS,
        defaultValue: 'standard',
    },
    disableRipple: {
        control: { type: 'boolean' },
        defaultValue: false,
    },
};

export const Variants = (): ReactNode => {
    return (
        <>
            <Card title="Undefined" imageUrl={cardExampleImage}>
                {cardMockedText}
            </Card>
            <Card
                title="elevation"
                imageUrl={cardExampleImage}
                variant="elevation"
            >
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

export const DisabledRippleEffect = (): ReactNode => {
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

export const WithAndWithoutImage = (): ReactNode => {
    return (
        <>
            <Card title="Card with image" imageUrl={cardExampleImage}>
                {cardMockedText}
            </Card>
            <Card title="Card without image">{cardMockedText}</Card>
        </>
    );
};

export const ContainingComponents = (): ReactNode => {
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
                        // @ts-ignore
                        component="div"
                        color="error"
                        label="Cancel"
                        size="small"
                        variant="contained"
                    />
                    <Button
                        // @ts-ignore
                        component="div"
                        color="success"
                        label="Continue"
                        size="small"
                        variant="contained"
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
