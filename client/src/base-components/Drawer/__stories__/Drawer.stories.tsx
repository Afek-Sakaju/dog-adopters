import type { ComponentType, ReactNode } from 'react';
import React from 'react';
import {
    AccessibilityNew as AccessibilityIcon,
    Notifications as NotificationsIcon,
    Menu as MenuIcon,
    Search as SearchIcon,
} from '@mui/icons-material/';

import { MUI_DRAWER_PLACEMENTS, MUI_DRAWER_VARIANTS } from '@/utils';
import Drawer from '../Drawer';

export default {
    title: 'base-components/Drawer',
    parameters: {
        controls: {
            exclude:
                /^(onOpen|onClose|itemsList|itemsListStyle|childrenListStyle)$/g,
        },
    },
    decorators: [(Story: ComponentType) => <Story />],
    component: Drawer,
};

const Template = (args: object): ReactNode => (
    <Drawer
        itemsList={[
            { name: 'Search', icon: <SearchIcon /> },
            { name: 'Notifications', icon: <NotificationsIcon /> },
            { name: 'Accessibility', icon: <AccessibilityIcon /> },
            { name: 'Menu', icon: <MenuIcon /> },
        ]}
        {...args}
    />
);

export const Default = Template.bind({});
Default.argTypes = {
    anchor: {
        control: 'inline-radio',
        options: MUI_DRAWER_PLACEMENTS,
        defaultValue: 'left',
    },
    open: {
        control: { type: 'boolean' },
        defaultValue: true,
    },
    variant: {
        control: 'inline-radio',
        options: MUI_DRAWER_VARIANTS,
        defaultValue: 'persistent',
    },
};
