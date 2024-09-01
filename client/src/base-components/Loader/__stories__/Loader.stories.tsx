import type { ComponentType, ReactNode } from 'react';
import React from 'react';
import { Box } from '@mui/material';
import { MUI_COLORS_LIST } from '@/utils';

import Loader from '../Loader';

export default {
    title: 'base-components/Loader',
    parameters: {
        controls: {
            exclude: /^(children)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '400px',
                    height: '100px',
                    padding: '1em',
                    border: '1px solid lightgrey',
                }}
            >
                <Story />
            </Box>
        ),
    ],
    component: Loader,
};

export const Default = (): ReactNode => <Loader />;

const Template = (args: object): ReactNode => <Loader {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
    color: {
        control: 'select',
        options: MUI_COLORS_LIST,
        defaultValue: 'primary',
    },
};

export const Colored = (): ReactNode => (
    <Box sx={{ display: 'flex', gap: '1rem'}}>
        {MUI_COLORS_LIST.map((color) => (
            <Loader key={color} color={color} />
        ))}
    </Box>
);