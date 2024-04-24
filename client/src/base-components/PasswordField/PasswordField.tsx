import type { ChangeEvent, FC, ReactNode } from 'react';
import React, { useState } from 'react';

import type { MuiColor, MuiInputMargin, MuiInputVariant } from '@/types';
import {
    InvisibleIcon,
    PasswordInput,
    VisibleIcon,
} from './PasswordField.styled';

interface PasswordFieldProps {
    autoComplete?: string;
    color?: MuiColor;
    disabled?: boolean;
    error?: boolean;
    focused?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    hideByDefault?: boolean;
    id?: string;
    label?: string;
    margin?: MuiInputMargin;
    maxRows?: number;
    multiline?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    startCmp?: string | ReactNode;
    value?: string | number;
    variant?: MuiInputVariant;
    [key: string]: unknown;
}

const PasswordField: FC<PasswordFieldProps> = (props): ReactNode => {
    const {
        autoComplete = 'off',
        color = 'primary',
        disabled,
        error,
        focused,
        fullWidth = true,
        helperText,
        hideByDefault = true,
        id,
        label,
        margin,
        maxRows,
        multiline,
        name,
        onChange,
        readOnly,
        required = true,
        rows,
        startCmp,
        value = '',
        variant = 'outlined',
        ...rest
    } = props;
    const [isHidden, setIsHidden] = useState(hideByDefault);

    const onToggleVisibility = () => setIsHidden(!isHidden);

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
            {...rest}
        />
    );
};

export default PasswordField;
