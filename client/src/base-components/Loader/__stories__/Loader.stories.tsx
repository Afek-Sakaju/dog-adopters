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
                    width: '200px',
                    height: '100px',
                    margin: '0 auto',
                    padding: '1em',
                    border: '1px solid lightgrey',
                    borderRadius: '10px',
                }}
            >
                <Story />
            </Box>
        ),
    ],
    component: Loader,
};

const Template = (args: object): ReactNode => <Loader {...args} />;

export const Default = Template.bind({});
Default.argTypes = {
    color: {
        control: 'select',
        options: MUI_COLORS_LIST,
        defaultValue: 'primary',
    },
};
