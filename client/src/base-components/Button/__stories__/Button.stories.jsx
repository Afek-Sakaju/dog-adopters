import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

const MUI_COLORS = ['primary', 'success', 'warning', 'error', 'info'];

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
  color: {
    control: 'inline-radio',
    options: MUI_COLORS,
    defaultValue: MUI_COLORS?.[0],
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  disableElevation: {
    control: { type: 'boolean' },
    defaultValue: false,
  },
  label: { control: { type: 'text' }, defaultValue: 'click' },
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  variant: {
    control: 'inline-radio',
    options: ['text', 'contained', 'outlined'],
    defaultValue: 'contained',
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

export const Disabled = () => {
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
  return MUI_COLORS.map((c, i) => {
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
