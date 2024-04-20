import type { FC, ReactNode, ChangeEvent } from 'react';
import React from 'react';

import type { MuiColor, MuiInputType } from '@/types';
import { InputAdornment, MuiTextField } from './TextField.styled';

interface TextFieldProps {
    autoComplete?: string;
    color?: MuiColor;
    disabled?: boolean;
    endCmp?: string | ReactNode;
    error?: boolean;
    focused?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    id?: string;
    label?: string;
    margin?: 'none' | 'dense' | 'normal';
    maxRows?: number;
    multiline?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    startCmp?: string | ReactNode;
    type?: MuiInputType;
    value?: string | number;
    variant?: 'filled' | 'outlined' | 'standard';
}

const TextField: FC<TextFieldProps> = (props): ReactNode => {
    const {
        autoComplete = 'off',
        color = 'primary',
        disabled,
        endCmp,
        error,
        focused,
        fullWidth = true,
        helperText,
        id,
        label,
        margin,
        maxRows,
        multiline,
        name,
        onChange,
        placeholder,
        readOnly,
        required,
        rows,
        startCmp,
        type = 'text',
        value,
        variant = 'outlined',
        ...rest
    } = props;

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
            placeholder={placeholder}
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
            {...rest}
        />
    );
};

export default TextField;
