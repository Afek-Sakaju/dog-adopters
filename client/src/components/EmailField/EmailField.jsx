import React from 'react';
import PropTypes from 'prop-types';

import { EmailInput } from './EmailField.styled';

export default function EmailField({
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
  disabled,
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
    <EmailInput
      label={label}
      id={id}
      name={name}
      variant={variant}
      onChange={onChange}
      value={value}
      startCmp={startCmp}
      endCmp={endCmp}
      fullWidth={fullWidth}
      required={required}
      disabled={disabled}
      type={type}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      autoComplete={autoComplete}
      error={error}
      margin={margin}
      focused={focused}
      helperText={helperText}
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
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'search', 'number', 'password']),
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
  disabled: false,
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