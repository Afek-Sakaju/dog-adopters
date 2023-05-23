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
      type={isHidden ? 'password' : 'text'}
      required
      endCmp={
        isHidden ? (
          <InvisibleIcon onClick={onToggleVisibility} />
        ) : (
          <VisibleIcon onClick={onToggleVisibility} />
        )
      }
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
  value: undefined,
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
