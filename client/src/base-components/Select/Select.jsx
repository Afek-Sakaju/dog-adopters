import React from 'react';
import PropTypes from 'prop-types';

import {
    MuiSelect,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
} from './Select.styled';

export default function Select({
    currentValue,
    fullWidth,
    helperText,
    onChange,
    optionsProperties,
    size,
    title,
    ...props
}) {
    return (
        <FormControl fullWidth={fullWidth} variant="filled">
            <InputLabel shrink>{title}</InputLabel>
            <MuiSelect
                onChange={(e) => onChange(e.target.value)}
                size={size}
                value={currentValue}
                {...props}
            >
                {Object.entries(optionsProperties)?.map(
                    ([label, properties], i) => {
                        const { style } = properties;
                        return (
                            <MenuItem key={i} value={label} sx={style}>
                                {label}
                            </MenuItem>
                        );
                    }
                )}
            </MuiSelect>
            {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
        </FormControl>
    );
}

Select.propTypes = {
    currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    onChange: PropTypes.func,
    optionsProperties: PropTypes.objectOf(
        PropTypes.shape({
            style: PropTypes.shape({
                color: PropTypes.string,
            }),
        })
    ),
    size: PropTypes.string,
    title: PropTypes.string,
};

Select.defaultProps = {
    currentValue: undefined,
    fullWidth: undefined,
    helperText: undefined,
    onChange: undefined,
    optionsProperties: [],
    size: 'small',
    title: undefined,
};
