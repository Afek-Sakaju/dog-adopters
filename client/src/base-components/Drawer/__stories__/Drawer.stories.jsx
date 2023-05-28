import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessibilityIcon from '@mui/icons-material/AccessibilityNew';
import MenuIcon from '@mui/icons-material/Menu';

import { MUI_PLACEMENTS } from '@utils';
import Button from '../../Button/Button';
import Drawer from '../Drawer';

const actionHandler = action('onToggle');
const handleEventAction = (event) => actionHandler(event);

const itemsList = [
  { name: 'Search', icon: <SearchIcon /> },
  { name: 'Notifications', icon: <NotificationsIcon /> },
  { name: 'Accessibility', icon: <AccessibilityIcon /> },
  { name: 'Menu', icon: <MenuIcon /> },
];

export default {
  title: 'base-components/Drawer',
  parameters: {
    controls: {
      exclude: /^(onOpen|onClose|itemsList|itemsListStyle|childrenListStyle)$/g,
    },
  },
  decorators: [
    (Story) => (
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

export const Default = () => <Drawer />;

const Template = (args) => <Drawer itemsList={itemsList} {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  anchor: {
    control: 'inline-radio',
    options: MUI_PLACEMENTS,
    defaultValue: 'left',
  },
  open: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  variant: {
    control: 'inline-radio',
    options: ['temporary', 'permanent', 'persistent'],
    defaultValue: 'persistent',
  },
};

export const AnchorPlacements = () => {
  const [activeDrawer, setActiveDrawer] = useState('');

  return (
    <>
      {MUI_PLACEMENTS.map((placement) => (
        <Button label={placement} onClick={() => setActiveDrawer(placement)} />
      ))}
      {MUI_PLACEMENTS.map((placement) => {
        return (
          <Drawer
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

export const Temporary = () => {
  return <Drawer itemsList={itemsList} open variant="temporary" />;
};

export const Permanent = () => {
  return <Drawer itemsList={itemsList} open variant="permanent" />;
};

export const Persistent = () => {
  return <Drawer itemsList={itemsList} open variant="persistent" />;
};

export const WithChildren = () => {
  return (
    <Drawer label="normal" open>
      <Button label="Un-clickable" color="error" disabled />
      <Button label="Clickable" color="success" />
    </Drawer>
  );
};

export const WithChildrenAndIcons = () => {
  return (
    <Drawer itemsList={itemsList} label="normal" open>
      <Button label="Un-clickable" color="error" disabled />
      <Button label="Clickable" color="success" />
    </Drawer>
  );
};
