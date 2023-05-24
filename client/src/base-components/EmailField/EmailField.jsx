import React from 'react';
import PropTypes from 'prop-types';

import { EmailInput } from './EmailField.styled';

export default function EmailField({
  autoComplete,
  color,
  disabled,
  endCmp,
  error,
  focused,
  fullWidth,
  helperText,
  id,
  label,
  margin,
  maxRows,
  multiline,
  name,
  onChange,
  readOnly,
  required,
  rows,
  startCmp,
  type,
  value,
  variant,
  ...props
}) {
  return (
    <EmailInput
      autoComplete={autoComplete}
      color={color}
      disabled={disabled}
      endCmp={endCmp}
      error={error}
      focused={focused}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      label={label}
      margin={margin}
      maxRows={maxRows}
      multiline={multiline}
      name={name}
      onChange={onChange}
      readOnly={readOnly}
      required={required}
      rows={rows}
      startCmp={startCmp}
      type={type}
      value={value}
      variant={variant}
      {...props}
    />
  );
}

EmailField.propTypes = {
  autoComplete: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.bool,
  focused: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.oneOf(['normal', 'dense']),
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
};

EmailField.defaultProps = {
  autoComplete: 'off',
  color: 'primary',
  disabled: undefined,
  endCmp: undefined,
  error: undefined,
  focused: undefined,
  fullWidth: true,
  helperText: undefined,
  id: undefined,
  label: 'Email address',
  margin: undefined,
  maxRows: undefined,
  multiline: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: undefined,
  required: true,
  rows: undefined,
  startCmp: undefined,
  type: 'email',
  value: undefined,
  variant: 'outlined',
};
