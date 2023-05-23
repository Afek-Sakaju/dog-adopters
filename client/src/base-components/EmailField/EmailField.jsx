import React from 'react';
import PropTypes from 'prop-types';

import { EmailInput } from './EmailField.styled';

export default function EmailField({
  label,
  id,
  name,
  color,
  variant,
  onChange,
  value,
  startCmp,
  endCmp,
  fullWidth,
  required,
  disabled,
  readOnly,
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
      fullWidth={fullWidth}
      label={label}
      id={id}
      name={name}
      color={color}
      error={error}
      helperText={helperText}
      onChange={onChange}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      startCmp={startCmp}
      endCmp={endCmp}
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

EmailField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
  autoComplete: PropTypes.string,
  error: PropTypes.bool,
  margin: PropTypes.oneOf(['normal', 'dense']),
  focused: PropTypes.bool,
  helperText: PropTypes.string,
};

EmailField.defaultProps = {
  label: 'Email address',
  id: undefined,
  name: undefined,
  color: 'primary',
  variant: 'outlined',
  onChange: undefined,
  value: undefined,
  startCmp: undefined,
  endCmp: undefined,
  fullWidth: true,
  required: true,
  disabled: undefined,
  readOnly: undefined,
  type: 'email',
  multiline: undefined,
  rows: undefined,
  maxRows: undefined,
  autoComplete: 'off',
  error: undefined,
  margin: undefined,
  focused: undefined,
  helperText: undefined,
};
