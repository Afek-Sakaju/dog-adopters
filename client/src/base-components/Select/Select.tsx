import type { FC, ReactNode } from 'react';
import React from 'react';

import type { MuiColor, MuiInputVariant, SelectOption } from '@/types';
import TextField from '../TextField/TextField';
import { MenuItem } from './Select.styled';

interface SelectProps {
    color?: MuiColor;
    defaultValue?: unknown;
    disabled?: boolean;
    focused?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    label?: string;
    name?: string;
    onChange?: (value: string) => void;
    optionsProperties?: SelectOption[];
    required?: boolean;
    variant?: MuiInputVariant;
    [key: string]: unknown;
}

const Select: FC<SelectProps> = (props): ReactNode => {
    const {
        color,
        defaultValue,
        disabled,
        focused,
        fullWidth,
        helperText,
        label,
        name,
        onChange,
        optionsProperties = [],
        required,
        variant = 'outlined',
        ...rest
    } = props;

    return (
        <TextField
            color={color}
            defaultValue={defaultValue}
            disabled={disabled}
            focused={focused}
            fullWidth={fullWidth}
            helperText={helperText}
            label={label}
            name={name}
            onChange={(e) => onChange?.(e.target.value)}
            required={required}
            select
            variant={variant}
            {...rest}
        >
            {optionsProperties?.map(({ label: optionLabel, value }, i) => {
                return (
                    <MenuItem key={i} value={value}>
                        {optionLabel}
                    </MenuItem>
                );
            })}
        </TextField>
    );
};

export default Select;
