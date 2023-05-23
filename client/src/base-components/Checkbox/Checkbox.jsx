import React from 'react';
import PropTypes from 'prop-types';

import { MuiCheckbox } from './Checkbox.styled';
import { MUI_PLACEMENTS } from '@utils';

export default function Checkbox({
  label,
  size,
  textColor,
  color,
  checked,
  onChange,
  icon,
  checkedIcon,
  defaultChecked,
  required,
  disabled,
  labelPlacement,
  fontSize,
  ...props
}) {
  return (
    <MuiCheckbox
      label={label}
      size={size}
      textcolor={textColor}
      color={color}
      icon={icon}
      checkedIcon={checkedIcon}
      defaultChecked={defaultChecked}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      labelPlacement={MUI_PLACEMENTS[labelPlacement]}
      fontSize={fontSize}
      {...props}
    />
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  textColor: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(Object.keys(MUI_PLACEMENTS)),
  fontSize: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
  size: 'small',
  textColor: undefined,
  color: undefined,
  checked: undefined,
  onChange: undefined,
  icon: undefined,
  checkedIcon: undefined,
  defaultChecked: undefined,
  required: false,
  disabled: false,
  labelPlacement: undefined,
  fontSize: undefined,
};
