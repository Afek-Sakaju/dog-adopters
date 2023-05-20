import React, { useState } from 'react';

import PasswordField from '../PasswordField';

export default {
  title: 'components/PasswordField',
  decorators: [
    (Story) => (
      <div
        style={{
          width: '800px',
          height: '800px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: PasswordField,
};

export const Default = () => <PasswordField />;

const Template = (args) => <PasswordField {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'Email address' },
  value: { control: { type: 'text' }, defaultValue: '' },
  variant: {
    control: 'inline-radio',
    options: ['filled', 'standard', 'outlined'],
    defaultValue: 'outlined',
  },
  color: {
    control: 'inline-radio',
    options: ['primary', 'success', 'warning', 'error'],
    defaultValue: 'primary',
  },
  fullWidth: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  required: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  type: {
    control: 'inline-radio',
    options: ['text', 'search', 'number', 'password'],
    defaultValue: 'text',
  },
  multiline: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  rows: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    defaultValue: 1,
  },
  maxRows: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    defaultValue: 5,
  },
  error: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  margin: {
    control: 'inline-radio',
    options: ['normal', 'dense'],
    defaultValue: 'normal',
  },
  focused: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  helperText: { control: { type: 'text' }, defaultValue: 'Helper-Text' },
};
