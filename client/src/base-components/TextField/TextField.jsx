import React from 'react';
import PropTypes from 'prop-types';

import { MUI_VARIANTS } from '@utils';
import { MuiTextField, InputAdornment } from './TextField.styled';

export default function TextField({
    label,
    id,
    name,
    color,
    variant,
    onChange,
    value,
    startCmp,
    endCmp,
    fullWidth,
    required,
    disabled,
    readOnly,
    type,
    multiline,
    rows,
    maxRows,
    autoComplete,
    error,
    margin,
    focused,
    helperText,
    ...props
}) {
    return (
        <MuiTextField
            autoComplete={autoComplete}
            color={color}
            disabled={disabled}
            error={error}
            focused={focused}
            fullWidth={fullWidth}
            helperText={helperText}
            id={id}
            label={label}
            margin={margin}
            maxRows={maxRows}
            multiline={multiline}
            name={name}
            onChange={onChange}
            required={required}
            rows={rows}
            type={type}
            value={value}
            variant={variant}
            InputProps={{
                readOnly,
                ...(startCmp && {
                    startAdornment: (
                        <InputAdornment position="start">
                            {startCmp}
                        </InputAdornment>
                    ),
                }),
                ...(endCmp && {
                    endAdornment: (
                        <InputAdornment position="end">{endCmp}</InputAdornment>
                    ),
                }),
            }}
            {...props}
        />
    );
}

TextField.propTypes = {
    autoComplete: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.bool,
    focused: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.oneOf(['normal', 'dense']),
    maxRows: PropTypes.number,
    multiline: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    rows: PropTypes.number,
    startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(MUI_VARIANTS.INPUT),
};

TextField.defaultProps = {
    autoComplete: 'off',
    color: 'primary',
    disabled: undefined,
    endCmp: undefined,
    error: undefined,
    focused: undefined,
    fullWidth: true,
    helperText: undefined,
    id: undefined,
    label: undefined,
    margin: undefined,
    maxRows: undefined,
    multiline: undefined,
    name: undefined,
    onChange: undefined,
    readOnly: undefined,
    required: undefined,
    rows: undefined,
    startCmp: undefined,
    type: 'text',
    value: undefined,
    variant: 'outlined',
};
