import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import {
  PasswordInput,
  InvisibleIcon,
  VisibleIcon,
} from './PasswordField.styled';

export default function PasswordField({
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
  hideByDefault,
  ...props
}) {
  const [isHidden, setIsHidden] = useState(hideByDefault);

  const onToggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <PasswordInput
      fullWidth={fullWidth}
      label={label}
      id={id}
      name={name}
      error={error}
      helperText={helperText}
      onChange={onChange}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      startCmp={startCmp}
      endCmp={
        isHidden ? (
          <InvisibleIcon onClick={onToggleVisibility} />
        ) : (
          <VisibleIcon onClick={onToggleVisibility} />
        )
      }
      margin={margin}
      focused={focused}
      multiline={multiline}
      maxRows={maxRows}
      rows={rows}
      autoComplete={autoComplete}
      type={isHidden ? 'password' : 'text'}
      variant={variant}
      {...props}
    />
  );
}

PasswordField.propTypes = {
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
  hideByDefault: PropTypes.bool,
};

PasswordField.defaultProps = {
  label: 'Password',
  id: undefined,
  name: undefined,
  variant: 'outlined',
  onChange: undefined,
  value: '',
  startCmp: undefined,
  endCmp: undefined,
  fullWidth: true,
  required: true,
  disabled: undefined,
  readOnly: undefined,
  type: 'password',
  multiline: undefined,
  rows: undefined,
  maxRows: undefined,
  autoComplete: 'off',
  error: undefined,
  margin: undefined,
  focused: undefined,
  helperText: undefined,
  hideByDefault: true,
};
