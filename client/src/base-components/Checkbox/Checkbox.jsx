import React from 'react';
import PropTypes from 'prop-types';

import { MUI_SIZES, MUI_SIZES_LIST } from '@/utils';
import { MuiCheckbox } from './Checkbox.styled';

export default function Checkbox({
    checked,
    checkedIcon,
    color,
    defaultChecked,
    disabled,
    fontSize,
    icon,
    label,
    onChange,
    required,
    size,
    textColor,
    ...props
}) {
    return (
        <MuiCheckbox
            checked={checked}
            checkedIcon={checkedIcon}
            color={color}
            defaultChecked={defaultChecked}
            disabled={disabled}
            fontSize={fontSize}
            icon={icon}
            label={label}
            onChange={onChange}
            required={required}
            size={size}
            textcolor={textColor}
            {...props}
        />
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    checkedIcon: PropTypes.node,
    color: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    fontSize: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    size: PropTypes.oneOf(MUI_SIZES_LIST),
    textColor: PropTypes.string,
};

Checkbox.defaultProps = {
    checked: undefined,
    checkedIcon: undefined,
    color: undefined,
    defaultChecked: undefined,
    disabled: false,
    fontSize: undefined,
    icon: undefined,
    label: '',
    onChange: undefined,
    required: false,
    size: MUI_SIZES.SMALL,
    textColor: undefined,
};
