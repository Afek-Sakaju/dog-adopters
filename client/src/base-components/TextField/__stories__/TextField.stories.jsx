import React, { useState } from 'react';

import TextField from '../TextField';

export default {
  title: 'base-components/TextField',
  parameters: {
    controls: {
      exclude: /^(onChange|id|name|autoComplete)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1em',
          height: '98vh',
          width: '98vw',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: TextField,
};

export const Default = () => <TextField />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        padding: '1em',
        width: '200px',
        height: '200px',
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <TextField {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'Label' },
  value: { control: { type: 'text' }, defaultValue: 'Value' },
  variant: {
    control: 'inline-radio',
    options: ['filled', 'standard', 'outlined'],
    defaultValue: 'small',
  },
  color: {
    control: 'inline-radio',
    options: ['primary', 'success', 'warning', 'error', 'information'],
    defaultValue: 'primary',
  },
  fullWidth: {
    control: { type: 'number', min: 100, max: 700, step: 20 },
    defaultValue: 200,
  },
  checked: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  required: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  readOnly: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  type: {
    control: 'inline-radio',
    options: ['text', 'number', 'password'],
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

export const Labeled = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      label="labeled text field"
    />
  );
};

export const NoLabeled = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
    />
  );
};

export const Required = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      required
      label="required text field"
    />
  );
};

export const ReadOnly = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      label="read only text field"
      readOnly
    />
  );
};

export const TextFieldTypes = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <TextField
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        type="email"
        label="email type"
      />

      <TextField
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        value={number}
        type="number"
        label="number type"
      />

      <TextField
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        type="password"
        label="password type"
      />
    </div>
  );
};

export const TextFieldVariants = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <TextField
        onChange={(event) => {
          setText1(event.target.value);
        }}
        value={text1}
        label="text1 type"
        variant="filled"
      />
      <TextField
        onChange={(event) => {
          setText2(event.target.value);
        }}
        value={text2}
        label="text2 type"
        variant="standard"
      />
      <TextField
        onChange={(event) => {
          setText3(event.target.value);
        }}
        value={text3}
        label="text3 type"
        variant="outlined"
      />
    </div>
  );
};
