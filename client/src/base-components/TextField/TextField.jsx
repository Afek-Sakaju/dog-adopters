import React from 'react';
import PropTypes from 'prop-types';

import { MuiTextField } from './TextField.styled';

export default function TextField({
  label,
  id,
  name,
  variant,
  onChange,
  value,
  startCmp,
  endCmp,
  fullWidth,
  required,
  Disabled,
  type,
  multiline,
  rows,
  maxRows,
  autoComplete,
  error,
  margin,
  focused,
  helperText,
  ...props
}) {
  return (
    <MuiTextField
      fullWidth={fullWidth}
      label={label}
      id={id}
      name={name}
      error={error}
      helperText={helperText}
      onChange={onChange}
      required={required}
      value={value}
      margin={margin}
      focused={focused}
      multiline={multiline}
      maxRows={maxRows}
      rows={rows}
      autoComplete={autoComplete}
      type={type}
      variant={variant}
      {...props}
    />
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
  onChange: PropTypes.func,
  value: PropTypes.string,
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  Disabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  autoComplete: PropTypes.string,
  error: PropTypes.bool,
  margin: PropTypes.oneOf(['normal', 'dense']),
  focused: PropTypes.bool,
  helperText: PropTypes.string,
};

TextField.defaultProps = {
  label: undefined,
  id: undefined,
  name: undefined,
  variant: 'outlined',
  onChange: undefined,
  value: undefined,
  startCmp: undefined,
  endCmp: undefined,
  fullWidth: true,
  required: undefined,
  Disabled: undefined,
  type: 'text',
  multiline: undefined,
  rows: undefined,
  maxRows: undefined,
  autoComplete: 'off',
  error: undefined,
  margin: undefined,
  focused: undefined,
  helperText: undefined,
};
