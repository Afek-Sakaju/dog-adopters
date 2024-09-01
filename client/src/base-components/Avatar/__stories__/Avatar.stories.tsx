import type { ComponentType, ReactNode } from 'react';
import React, { useState } from 'react';

import Avatar from '../Avatar';

export default {
    title: 'base-components/Avatar',
    parameters: {
        controls: {
            exclude: /^(fallbackImage|icon|image|onClick|username)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100px',
                    height: '100px',
                    padding: '2em',
                    gap: '1em',
                    border: 'lightgrey 1px solid',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Avatar,
};

export const Default = (): ReactNode => <Avatar username="John Doe" />;

const Template = (args: object): ReactNode => {
    const [image, setImage] = useState<string | undefined>(undefined);
    const handleError = () => setImage(undefined);

    return (
        <Avatar
            username="Jane Doe"
            image={image}
            onClick={() => console.log('Avatar clicked!')}
            onError={handleError}
            {...args}
        />
    );
};

export const Custom = Template.bind({});
Custom.argTypes = {
    variant: {
        control: 'inline-radio',
        options: ['circular', 'rounded', 'square'],
        defaultValue: 'rounded',
    },
    size: {
        control: 'text',
        defaultValue: '50px',
    },
    tooltipText: {
        control: 'text',
        defaultValue: 'Avatar Tooltip',
    },
    fallbackImage: {
        control: 'text',
        defaultValue: '',
    },
    icon: {
        control: false,
    },
    onClick: {
        control: false,
    },
    username: {
        control: 'text',
        defaultValue: 'Jane Doe',
    },
};

export const Variants = (): ReactNode => {
    return (
        <>
            <Avatar username="John Doe" variant="circular" />
            <Avatar username="Jane Doe" variant="rounded" />
            <Avatar username="Jake Doe" variant="square" />
        </>
    );
};

export const WithTooltip = (): ReactNode => {
    return <Avatar username="John Doe" tooltipText="This is John Doe" />;
};