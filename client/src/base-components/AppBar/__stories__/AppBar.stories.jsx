import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import { MUI_COLORS } from '@utils';
import AppBar from '../AppBar';

export default {
  title: 'base-components/AppBar',
  decorators: [
    (Story) => (
      <div style={{ height: '130vh' }}>
        <Story />
      </div>
    ),
  ],
  component: AppBar,
};

export const Default = () => <AppBar />;

const Template = (args) => <AppBar {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'App bar title' },
  position: {
    control: 'inline-radio',
    options: [
      'static',
      'relative',
      'absolute',
      'fixed',
      'sticky',
      'inherit',
      'initial',
    ],
    defaultValue: 'static',
  },
  color: {
    control: 'inline-radio',
    options: MUI_COLORS,
    defaultValue: MUI_COLORS?.[0],
  },
};

export const IconsBar = () => {
  const MenuButton = (
    <IconButton color="inherit">
      <MenuIcon />
    </IconButton>
  );

  return (
    <AppBar label="Icons app bar" startCmp={MenuButton}>
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
    </AppBar>
  );
};

export const DisappearingBar = () => {
  return (
    <AppBar position="initial" label="Scroll down">
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <MenuIcon />
      </IconButton>
    </AppBar>
  );
};

export const Colored = () => {
  return MUI_COLORS.map((c, i) => {
    return (
      <AppBar key={i} position="static" color={c} label={c}>
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
