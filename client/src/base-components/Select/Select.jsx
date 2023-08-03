import React from 'react';
import PropTypes from 'prop-types';

import { MuiSelect, MenuItem } from './Select.styled';

export default function Select({
    currentValue,
    onChange,
    optionsProperties,
    size,
    ...props
}) {
    return (
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
    );
}

Select.propTypes = {
    currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    optionsProperties: PropTypes.objectOf(
        PropTypes.shape({
            style: PropTypes.shape({
                color: PropTypes.string,
            }),
        })
    ),
    size: PropTypes.string,
};

Select.defaultProps = {
    currentValue: undefined,
    onChange: undefined,
    optionsProperties: [],
    size: 'small',
};
