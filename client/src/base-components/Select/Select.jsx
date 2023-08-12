import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { MenuItem } from './Select.styled';
import TextField from '../TextField/TextField';

export default function Select({
    fullWidth,
    helperText,
    label,
    name,
    onChange,
    optionsProperties,
    shouldSetDefaultValue,
    variant,
    ...props
}) {
    const defaultValue = shouldSetDefaultValue
        ? Object.keys(optionsProperties)[0]
        : undefined;

    useEffect(() => {
        if (shouldSetDefaultValue) onChange(undefined, defaultValue);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldSetDefaultValue]);

    return (
        <TextField
            label={label}
            onChange={(e) => onChange(e.target.value)}
            select
            variant={variant}
            helperText={helperText}
            defaultValue={defaultValue}
            {...props}
        >
            {Object.entries(optionsProperties)?.map(
                ([optionLabel, properties], i) => {
                    const { style } = properties;
                    return (
                        <MenuItem key={i} value={optionLabel} sx={style}>
                            {optionLabel}
                        </MenuItem>
                    );
                }
            )}
        </TextField>
    );
}

Select.propTypes = {
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    optionsProperties: PropTypes.objectOf(
        PropTypes.shape({
            style: PropTypes.shape({
                color: PropTypes.string,
            }),
        })
    ),
    shouldSetDefaultValue: PropTypes.bool,
    label: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
};

Select.defaultProps = {
    fullWidth: undefined,
    helperText: undefined,
    name: undefined,
    onChange: undefined,
    optionsProperties: [],
    shouldSetDefaultValue: undefined,
    label: undefined,
    variant: 'outlined',
};
