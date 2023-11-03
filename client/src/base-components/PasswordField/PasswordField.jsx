import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MUI_COLORS, MUI_INPUT_MARGIN, MUI_VARIANTS } from '@utils';
import {
    PasswordInput,
    InvisibleIcon,
    VisibleIcon,
} from './PasswordField.styled';

export default function PasswordField({
    autoComplete,
    color,
    disabled,
    endCmp,
    error,
    focused,
    fullWidth,
    helperText,
    hideByDefault,
    id,
    label,
    margin,
    maxRows,
    multiline,
    name,
    onChange,
    readOnly,
    required,
    rows,
    startCmp,
    type,
    value,
    variant,
    ...props
}) {
    const [isHidden, setIsHidden] = useState(hideByDefault);

    const onToggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <PasswordInput
            autoComplete={autoComplete}
            color={color}
            disabled={disabled}
            endCmp={
                isHidden ? (
                    <InvisibleIcon onClick={onToggleVisibility} />
                ) : (
                    <VisibleIcon onClick={onToggleVisibility} />
                )
            }
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
            readOnly={readOnly}
            required={required}
            rows={rows}
            startCmp={startCmp}
            type={isHidden ? 'password' : 'text'}
            value={value}
            variant={variant}
            {...props}
        />
    );
}

PasswordField.propTypes = {
    autoComplete: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.bool,
    focused: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    hideByDefault: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.oneOf(MUI_INPUT_MARGIN),
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

PasswordField.defaultProps = {
    autoComplete: 'off',
    color: MUI_COLORS[0],
    disabled: undefined,
    endCmp: undefined,
    error: undefined,
    focused: undefined,
    fullWidth: true,
    helperText: undefined,
    hideByDefault: true,
    id: undefined,
    label: 'Password',
    margin: undefined,
    maxRows: undefined,
    multiline: undefined,
    name: undefined,
    onChange: undefined,
    readOnly: undefined,
    required: true,
    rows: undefined,
    startCmp: undefined,
    type: 'password',
    value: '',
    variant: 'outlined',
};
