import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { MUI_COlORS, MUI_INPUT_TYPES } from '@utils';
import TextField from '../TextField';

const actionHandler = action('onChange');

export default {
  title: 'base-components/TextField',
  parameters: {
    controls: {
      exclude: /^(onChange|id|name|autoComplete|startCmp|endCmp)$/g,
    },
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
  component: TextField,
};

export const Default = () => <TextField />;

const Template = (args) => <TextField {...args} />;

export const Custom = Template.bind({});

Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'Label' },
  value: { control: { type: 'text' }, defaultValue: 'Value' },
  variant: {
    control: 'inline-radio',
    options: ['filled', 'standard', 'outlined'],
    defaultValue: 'standard',
  },
  color: {
    control: 'inline-radio',
    options: MUI_COlORS,
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
  readOnly: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  type: {
    control: 'inline-radio',
    options: MUI_INPUT_TYPES,
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

export const Labeled = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  return (
    <>
      <TextField
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          actionHandler(event);
        }}
        label="labeled text field"
      />
      <TextField
        value={text2}
        onChange={(event) => {
          setText2(event.target.value);
          actionHandler(event);
        }}
      />
    </>
  );
};

export const FieldStates = () => {
  const [requiredText, setRequiredText] = useState('');
  const [disabledText, setDisabledText] = useState('');
  const [readOnlyText, setReadOnlyText] = useState('');

  return (
    <>
      <TextField
        value={requiredText}
        onChange={(event) => {
          setRequiredText(event.target.value);
          actionHandler(event);
        }}
        required
        label="Required"
      />
      <TextField
        value={disabledText}
        onChange={(event) => {
          setDisabledText(event.target.value);
          actionHandler(event);
        }}
        disabled
        label="Disabled"
      />
      <TextField
        value={readOnlyText}
        onChange={(event) => {
          setReadOnlyText(event.target.value);
          actionHandler(event);
        }}
        readOnly
        label="Read-only"
      />
    </>
  );
};

export const TextFieldTypes = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState(0);

  return (
    <>
      <TextField
        onChange={(event) => {
          setSearch(event.target.value);
          actionHandler(event);
        }}
        value={search}
        type="search"
        label="search type"
      />
      <TextField
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        type="text"
        label="text type"
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
    </>
  );
};

export const TextFieldVariants = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  return (
    <>
      <TextField
        onChange={(event) => {
          setText1(event.target.value);
        }}
        value={text1}
        label="filled"
        variant="filled"
      />
      <TextField
        onChange={(event) => {
          setText2(event.target.value);
        }}
        value={text2}
        label="standard"
        variant="standard"
      />
      <TextField
        onChange={(event) => {
          setText3(event.target.value);
        }}
        value={text3}
        label="outlined"
        variant="outlined"
      />
    </>
  );
};
