import React, { useState } from 'react';

import EmailField from '../EmailField';

export default {
  title: 'components/EmailField',
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
    defaultValue: 'standard',
  },
  color: {
    control: 'inline-radio',
    options: ['primary', 'success', 'warning', 'error', 'information'],
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
Custom.decorators = [
  (Story) => (
    <div
      style={{
        padding: '1em',
        width: '300px',
        height: '300px',
      }}
    >
      <Story />
    </div>
  ),
];

export const ActiveEmailField = () => {
  const [text, setText] = useState('');

  return (
    <EmailField
      onChange={(event) => {
        setText(event.target.value);
      }}
      value={text}
    />
  );
};
