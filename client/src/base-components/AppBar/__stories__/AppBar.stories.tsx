import React, { type ComponentType, type ReactNode } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessibilityIcon from '@mui/icons-material/AccessibilityNew';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import type { MuiColor } from '@/types';
import { MUI_COLORS, MUI_COLORS_LIST } from '@/utils';
import AppBar from '../AppBar';

const MenuButton: ReactNode = (
    <IconButton color="inherit">
        <MenuIcon />
    </IconButton>
);

export default {
    title: 'base-components/AppBar',
    parameters: {
        controls: { exclude: /^(startCmp)$/g },
    },
    decorators: [
        (Story: ComponentType) => (
            <div style={{ height: '130vh' }}>
                <Story />
            </div>
        ),
    ],
    component: AppBar,
};

export const Default = (): ReactNode => <AppBar />;

const Template = (args: object): ReactNode => <AppBar {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
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

export const StickyBar = (): ReactNode => {
    return <AppBar position="sticky" title="Scroll down" />;
};

export const DisappearingBar = (): ReactNode => {
    return <AppBar position="static" title="Scroll down" />;
};

export const StartComponent = (): ReactNode => {
    return (
        <AppBar
            title="The menu is positioned at the start"
            startCmp={MenuButton}
        />
    );
};

export const WithChildrenIcons = (): ReactNode => {
    return (
        <AppBar title="App bar with children icons">
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
};

export const Colored = (): ReactNode => {
    return MUI_COLORS_LIST.map((color: MuiColor, i: number) => {
        return (
            <AppBar key={i} position="static" color={color} title={color}>
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
            </AppBar>
        );
    });
};
