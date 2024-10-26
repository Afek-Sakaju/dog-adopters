import type { ComponentType, ReactNode } from 'react';
import React from 'react';
import {
    AccessibilityNew as AccessibilityIcon,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Search as SearchIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { MUI_COLORS, MUI_COLORS_LIST } from '@/utils';
import AppBar from '../AppBar';

export default {
    title: 'base-components/AppBar',
    parameters: {
        controls: { exclude: /^(startCmp)$/g },
    },
    decorators: [(Story: ComponentType) => <Story />],
    component: AppBar,
};

const Template = (args: object): ReactNode => (
    <AppBar
        startCmp={
            <IconButton color="inherit">
                <MenuIcon />
            </IconButton>
        }
        {...args}
    >
        <IconButton color="inherit">
            <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
            <AccessibilityIcon />
        </IconButton>
        <IconButton color="inherit">
            <NotificationsIcon />
        </IconButton>
    </AppBar>
);

export const Default = Template.bind({});
Default.argTypes = {
    color: {
        control: 'inline-radio',
        options: MUI_COLORS_LIST,
        defaultValue: MUI_COLORS.PRIMARY,
    },
    title: { control: { type: 'text' }, defaultValue: 'App bar title' },
    position: {
        control: 'inline-radio',
        options: [
            'static',
            'relative',
            'absolute',
            'fixed',
            'sticky',
            'inherit',
        ],
        defaultValue: 'static',
    },
};
