import React from 'react';

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

export const Checked = () => {
  return (
    <>
      <AppBar label="Checked" checked />
      <AppBar label="Unchecked" checked={false} />
    </>
  );
};
