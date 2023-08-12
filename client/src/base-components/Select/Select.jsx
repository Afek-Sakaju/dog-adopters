import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    MuiSelect,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
} from './Select.styled';

export default function Select({
    fullWidth,
    helperText,
    name,
    onChange,
    optionsProperties,
    shouldSetDefaultValue,
    size,
    title,
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
        <FormControl fullWidth={fullWidth} variant="filled" name={name}>
            <InputLabel shrink>{title}</InputLabel>
            <MuiSelect
                onChange={(e) => onChange(e.target.value)}
                size={size}
                defaultValue={defaultValue}
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
    size: PropTypes.string,
    title: PropTypes.string,
};

Select.defaultProps = {
    fullWidth: undefined,
    helperText: undefined,
    name: undefined,
    onChange: undefined,
    optionsProperties: [],
    shouldSetDefaultValue: undefined,
    size: 'small',
    title: undefined,
};
