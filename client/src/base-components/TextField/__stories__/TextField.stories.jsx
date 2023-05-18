import React, { useState } from 'react';

import TextField from '../TextField';

export default {
  title: 'base-components/TextField',
  parameters: {
    controls: {
      exclude: /^(onChange|id|name)$/g,
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
  component: Checkbox,
};

export const Default = () => <Checkbox />;
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

const Template = (args) => <Checkbox {...args} />;

// variant,
// startCmp,
// endCmp,
// fullWidth,
// required,
// readOnly,
// type,
// multiline,
// rows,
// maxRows,
// autoComplete,
// error,
// margin,
// focused,
// helperText,

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
    defaultValue: 'default',
  },
  checked: {
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
  labelPlacement: {
    control: 'inline-radio',
    options: ['top', 'start', 'bottom', 'end'],
    defaultValue: 'top',
  },
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
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="include condition"
    />
  );
};
export const NoLabeled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
    />
  );
};
export const Checked = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="test"
    />
  );
};
export const Disabled = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="disabled checkbox"
      disabled
    />
  );
};

export const Required = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      required
      label="required checkbox test"
      helperText="is required checkbox!"
    />
  );
};

export const Colored = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="some colored checkbox"
      color="success"
    />
  );
};

export const LabelPlacement = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="top"
        label="top label checkbox"
      />

      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="start"
        label="start label checkbox"
      />

      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="bottom"
        label="bottom label checkbox"
      />

      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="end"
        label="end label checkbox"
      />
    </div>
  );
};

export const Sizes = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="medium checkbox"
        size={'medium'}
      />
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="small checkbox"
        size={'small'}
      />
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="custom size checkbox"
        fontSize={26}
      />
    </>
  );
};
