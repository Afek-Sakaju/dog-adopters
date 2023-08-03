import React from 'react';
import PropTypes from 'prop-types';

import { MuiSelect, MenuItem, FormControl, InputLabel } from './Select.styled';

export default function Select({
    currentValue,
    onChange,
    optionsProperties,
    size,
    title,
    fullWidth,
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
        </FormControl>
    );
}

Select.propTypes = {
    currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullWidth: PropTypes.bool,
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
    onChange: undefined,
    optionsProperties: [],
    size: 'small',
    title: undefined,
};
