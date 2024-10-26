import type { FC, ReactNode, ChangeEvent, CSSProperties } from 'react';
import React from 'react';

import type { MuiColor, MuiInputType } from '@/types';
import { InputAdornment, MuiTextField } from './TextField.styled';

interface TextFieldProps {
    autoComplete?: string;
    color?: MuiColor;
    children?: ReactNode;
    defaultValue?: unknown;
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
    select?: boolean;
    startCmp?: string | ReactNode;
    sx?: CSSProperties;
    type?: MuiInputType;
    value?: string | number;
    variant?: 'filled' | 'outlined' | 'standard';
    [key: string]: unknown;
}

const TextField: FC<TextFieldProps> = (props): ReactNode => {
    const {
        autoComplete = 'off',
        color = 'primary',
        children,
        defaultValue,
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
        select,
        startCmp,
        sx,
        type = 'text',
        value,
        variant = 'outlined',
        ...rest
    } = props;

    return (
        <MuiTextField
            autoComplete={autoComplete}
            color={color}
            defaultValue={defaultValue}
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
            select={select}
            sx={sx}
            type={type}
            value={value}
            variant={variant}
            InputProps={{
                style: { borderRadius: "17px" },
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
        >
            {children}
        </MuiTextField>
    );
};

export default TextField;
