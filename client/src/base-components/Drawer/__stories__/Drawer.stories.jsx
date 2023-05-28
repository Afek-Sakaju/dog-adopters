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

export default {
  title: 'base-components/Drawer',
  parameters: {
    controls: {
      exclude: /^(onOpen|onClose|itemsList)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '90vw',
          height: '90vh',
          padding: '3em',
          gap: '1em',
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

const Template = (args) => <Drawer {...args} />;

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
    defaultValue: 'temporary',
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
          />
        );
      })}
    </>
  );
};

export const Variants = () => {
  return (
    <>
      <Drawer anchor="left" open variant="temporary" />
      <Drawer anchor="right" open variant="permanent" />
      <Drawer anchor="top" open variant="persistent" />
    </>
  );
};

export const WithItemsList = () => {
  const itemsList = [
    { name: 'Search', icon: SearchIcon },
    { name: 'Notifications', icon: NotificationsIcon },
    { name: 'Accessibility', icon: AccessibilityIcon },
    { name: 'Menu', icon: MenuIcon },
  ];
  return <Drawer open itemsList={itemsList} />;
};

export const WithChildren = () => {
  return (
    <Drawer label="normal" onClick={(event) => actionHandler(event)}>
      <Button label="Un-clickable" color="error" disabled />
      <Button label="Clickable" color="success" />
    </Drawer>
  );
};
