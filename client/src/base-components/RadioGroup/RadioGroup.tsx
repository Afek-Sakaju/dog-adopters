import type { ChangeEvent, FC, ReactNode } from 'react';
import React from 'react';

import type {
    MuiColor,
    MuiRadioGroupPlacement,
    MuiRadioGroupSizes,
} from '@/types';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    HelperText,
    MuiRadioGroup,
    Radio,
} from './RadioGroup.styled';

export type RadioGroupOption = {
    label?: string;
    value?: unknown;
    color?: MuiColor;
    size?: MuiRadioGroupSizes;
};

interface RadioGroupProps {
    color?: MuiColor;
    value?: unknown;
    disabled?: boolean;
    defaultValue?: unknown;
    error?: boolean;
    helperText?: string;
    label?: string;
    labelPlacement?: MuiRadioGroupPlacement;
    onChange?: (value: string) => void;
    options?: RadioGroupOption[];
    row?: boolean;
    size?: MuiRadioGroupSizes;
    [key: string]: unknown;
}

const RadioGroup: FC<RadioGroupProps> = (props): ReactNode => {
    const {
        color,
        disabled,
        defaultValue,
        error,
        helperText,
        label,
        labelPlacement,
        onChange,
        options,
        row,
        size,
        value = '',
    } = props;
    const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <FormControl error={error} disabled={disabled}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                onChange={onRadioChange}
                row={row}
                value={value}
                defaultValue={defaultValue}
            >
                {options?.map(
                    /* Although RadioGroup has a color/size prop, added here a color/size option to improve 
                    the flexibility in adjusting the style of individual radio button within the group. */
                    ({
                        label: radioLabel,
                        value: radioValue,
                        color: radioColor,
                        size: radioSize,
                    }) => (
                        <FormControlLabel
                            key={radioLabel}
                            control={
                                <Radio
                                    size={radioSize || size}
                                    color={
                                        error ? 'error' : radioColor || color
                                    }
                                />
                            }
                            label={radioLabel}
                            labelPlacement={labelPlacement}
                            value={radioValue}
                        />
                    )
                )}
            </MuiRadioGroup>
            <HelperText isError={error}>{helperText}</HelperText>
        </FormControl>
    );
};

export default RadioGroup;
