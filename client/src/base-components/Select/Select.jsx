import React from 'react';
import PropTypes from 'prop-types';

import { MenuItem } from './Select.styled';
import TextField from '../TextField/TextField';

export default function Select({
    disabled,
    fullWidth,
    helperText,
    label,
    name,
    onChange,
    optionsProperties,
    required,
    shouldSetDefaultValue,
    variant,
    ...props
}) {
    return (
        <TextField
            label={label}
            onChange={(e) => onChange?.(e.target.value)}
            select
            variant={variant}
            helperText={helperText}
            disabled={disabled}
            required={required}
            {...props}
        >
            {optionsProperties?.map((optionLabel, i) => {
                return (
                    <MenuItem key={i} value={optionLabel}>
                        {optionLabel}
                    </MenuItem>
                );
            })}
        </TextField>
    );
}

Select.propTypes = {
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    optionsProperties: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    ),
    required: PropTypes.bool,
    shouldSetDefaultValue: PropTypes.bool,
    label: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
};

Select.defaultProps = {
    disabled: undefined,
    fullWidth: undefined,
    helperText: undefined,
    name: undefined,
    onChange: undefined,
    optionsProperties: [],
    required: undefined,
    shouldSetDefaultValue: undefined,
    label: undefined,
    variant: 'outlined',
};
