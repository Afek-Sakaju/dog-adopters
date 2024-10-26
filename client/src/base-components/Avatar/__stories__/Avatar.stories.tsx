import type { ComponentType, ReactNode } from 'react';
import React from 'react';

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
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100px',
                    height: '100px',
                    padding: '2em',
                    margin: '0 auto',
                    gap: '1em',
                    border: 'lightgrey 1px solid',
                    borderRadius: '10px',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Avatar,
};

const Template = (args: object): ReactNode => {
    return (
        <Avatar
            username="Jane Doe"
            onClick={() => console.log('Avatar clicked!')}
            {...args}
        />
    );
};

export const Default = Template.bind({});
Default.argTypes = {
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