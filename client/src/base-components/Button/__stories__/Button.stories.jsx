import React from 'react';
import { action } from '@storybook/addon-actions';

import { MUI_COlORS } from '@utils';
import Button from '../Button';

const actionHandler = action('onClick');

export default {
  title: 'base-components/Button',
  parameters: {
    controls: {
      exclude: /^(onClick|startIcon|endIcon)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          height: '300px',
          padding: '3em',
          gap: '1em',
          border: 'lightgrey 1px solid',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: Button,
};

export const Default = () => <Button />;

const Template = (args) => <Button {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: 'check' },
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  color: {
    control: 'inline-radio',
    options: MUI_COlORS,
    defaultValue: 'primary',
  },
  variant: {
    control: 'inline-radio',
    options: ['text', 'contained', 'outlined'],
    defaultValue: 'contained',
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  disableElevation: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
};

export const Labeled = () => {
  return (
    <>
      <Button label="Labeled" onClick={(event) => actionHandler(event)} />
      <Button onClick={(event) => actionHandler(event)} />
    </>
  );
};

export const Variants = () => {
  return (
    <>
      <Button
        label="Text"
        variant="text"
        onClick={(event) => actionHandler(event)}
      />
      <Button
        label="Contained"
        variant="contained"
        onClick={(event) => actionHandler(event)}
      />
      <Button
        label="Outlined"
        variant="outlined"
        onClick={(event) => actionHandler(event)}
      />
    </>
  );
};

export const FieldStates = () => {
  return (
    <>
      <Button label="normal" onClick={(event) => actionHandler(event)} />
      <Button
        label="disabled"
        disabled
        onClick={(event) => actionHandler(event)}
      />
    </>
  );
};

export const Colored = () => {
  return MUI_COlORS.map((c, i) => {
    return (
      <Button
        key={i}
        label={c}
        color={c}
        onClick={(event) => actionHandler(event)}
      />
    );
  });
};

export const Sizes = () => {
  return (
    <>
      <Button
        label="Large"
        size="large"
        onClick={(event) => actionHandler(event)}
      />
      <Button
        label="Medium"
        size="medium"
        onClick={(event) => actionHandler(event)}
      />
      <Button
        label="Small"
        size="small"
        onClick={(event) => actionHandler(event)}
      />
    </>
  );
};
