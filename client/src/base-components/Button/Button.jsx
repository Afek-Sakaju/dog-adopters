import React from 'react';
import PropTypes from 'prop-types';

import { MuiButton } from './Button.styled';

export default function Button({
  label,
  variant,
  color,
  size,
  disabled,
  disableElevation,
  onClick,
  startIcon,
  endIcon,
  ...props
}) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      disableElevation={disableElevation}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {label}
    </MuiButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  disableElevation: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Button.defaultProps = {
  label: '',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disabled: undefined,
  disableElevation: undefined,
  onClick: undefined,
  startIcon: undefined,
  endIcon: undefined,
};
