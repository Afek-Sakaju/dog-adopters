import React from 'react';
import PropTypes from 'prop-types';

import { MuiButton } from './Button.styled';

export default function Button({
  color,
  disabled,
  disableElevation,
  endIcon,
  label,
  onClick,
  size,
  startIcon,
  variant,
  ...props
}) {
  return (
    <MuiButton
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      endIcon={endIcon}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      variant={variant}
      {...props}
    >
      {label}
    </MuiButton>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  disableElevation: PropTypes.bool,
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
};

Button.defaultProps = {
  color: 'primary',
  disabled: undefined,
  disableElevation: undefined,
  endIcon: undefined,
  label: '',
  onClick: undefined,
  size: 'medium',
  startIcon: undefined,
  variant: 'contained',
};
