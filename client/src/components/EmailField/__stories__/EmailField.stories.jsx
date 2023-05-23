import React from 'react';

import EmailField from '../EmailField';

export default {
  title: 'components/EmailField',
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '800px',
          height: '500px',
          border: 'lightgrey 1px solid',
          padding: '0.5em',
          gap: '1em',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: EmailField,
};

export const Default = () => <EmailField />;

const Template = (args) => <EmailField {...args} />;

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
    defaultValue: true,
  },
  required: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  readOnly: {
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
