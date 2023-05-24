import React from 'react';

import { MUI_COLORS, MUI_INPUT_TYPES } from '@utils';
import EmailField from '../EmailField';

export default {
  title: 'base-components/EmailField',
  parameters: {
    controls: { exclude: /^(onChange|id|name|autoComplete|startCmp|endCmp)$/g },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '800px',
          height: '500px',
          padding: '0.5em',
          gap: '1em',
          border: 'lightgrey 1px solid',
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
  color: {
    control: 'inline-radio',
    options: MUI_COLORS,
    defaultValue: MUI_COLORS?.[0],
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  error: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  focused: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  fullWidth: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  helperText: { control: { type: 'text' }, defaultValue: 'Helper-Text' },
  margin: {
    control: 'inline-radio',
    options: ['normal', 'dense'],
    defaultValue: 'normal',
  },
  maxRows: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    defaultValue: 5,
  },
  multiline: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  readOnly: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  required: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  rows: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    defaultValue: 1,
  },
  type: {
    control: 'inline-radio',
    options: MUI_INPUT_TYPES,
    defaultValue: 'email',
  },
  value: { control: { type: 'text' }, defaultValue: '' },
  variant: {
    control: 'inline-radio',
    options: ['filled', 'standard', 'outlined'],
    defaultValue: 'outlined',
  },
  label: { control: { type: 'text' }, defaultValue: 'Email' },
};
