import AccessibilityIcon from '@mui/icons-material/AccessibilityNew';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { action } from '@storybook/addon-actions';
import type { ChangeEvent, ComponentType, ReactNode } from 'react';
import React, { useState } from 'react';

import { MUI_DRAWER_PLACEMENTS, MUI_DRAWER_VARIANTS } from '@/utils';
import Button from '../../Button/Button';
import Drawer from '../Drawer';
import { MuiDrawerPlacement } from '@/types';

const actionHandler = action('onToggle');
const handleEventAction = (event: ChangeEvent) => actionHandler(event);

const itemsList: {
    name: string;
    icon: ReactNode;
}[] = [
    { name: 'Search', icon: <SearchIcon /> },
    { name: 'Notifications', icon: <NotificationsIcon /> },
    { name: 'Accessibility', icon: <AccessibilityIcon /> },
    { name: 'Menu', icon: <MenuIcon /> },
];

export default {
    title: 'base-components/Drawer',
    parameters: {
        controls: {
            exclude:
                /^(onOpen|onClose|itemsList|itemsListStyle|childrenListStyle)$/g,
        },
    },
    decorators: [
        (Story: ComponentType) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90vw',
                    height: '90vh',
                    gap: '20px',
                    border: 'lightgrey 1px solid',
                }}
            >
                <Story />
            </div>
        ),
    ],
    component: Drawer,
};

export const Default = (): ReactNode => <Drawer />;

const Template = (args: object): ReactNode => (
    <Drawer itemsList={itemsList} {...args} />
);

export const Custom = Template.bind({});
Custom.argTypes = {
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

export const AnchorPlacements = (): ReactNode => {
    const [activeDrawer, setActiveDrawer] = useState('');

    return (
        <>
            <ButtonGroup variant="contained">
                {MUI_DRAWER_PLACEMENTS.map((placement: MuiDrawerPlacement) => (
                    <Button
                        key={placement}
                        label={placement}
                        onClick={() => setActiveDrawer(placement)}
                    />
                ))}
            </ButtonGroup>
            {MUI_DRAWER_PLACEMENTS.map((placement: MuiDrawerPlacement) => {
                return (
                    <Drawer
                        key={placement}
                        anchor={placement}
                        onClose={handleEventAction}
                        onOpen={handleEventAction}
                        open={placement === activeDrawer}
                        itemsList={itemsList}
                    />
                );
            })}
        </>
    );
};

export const Temporary = (): ReactNode => {
    return <Drawer itemsList={itemsList} open variant="temporary" />;
};

export const Permanent = (): ReactNode => {
    return <Drawer itemsList={itemsList} open variant="permanent" />;
};

export const Persistent = (): ReactNode => {
    return <Drawer itemsList={itemsList} open variant="persistent" />;
};

export const WithChildren = (): ReactNode => {
    return (
        <Drawer label="normal" open>
            <Typography variant="h6">Children</Typography>
            <Button label="Click" color="success" />
        </Drawer>
    );
};
