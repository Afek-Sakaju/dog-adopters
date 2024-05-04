import type { FC, ReactNode } from 'react';
import React from 'react';

import { MUI_SIZES_LIST } from '@/utils';
import { MuiCheckbox } from './Checkbox.styled';

interface CheckboxProps {
    checked?: boolean;
    checkedIcon?: React.ReactNode;
    color?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    fontSize?: string;
    icon?: React.ReactNode;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    size?: (typeof MUI_SIZES_LIST)[number];
    textColor?: string;
    [key: string]: unknown;
}

const Checkbox: FC<CheckboxProps> = (props): ReactNode => {
    const {
        checked,
        checkedIcon,
        color,
        defaultChecked,
        disabled = false,
        fontSize,
        icon,
        label = '',
        onChange,
        required = false,
        size = 'small',
        textColor,
        ...rest
    } = props;

    return (
        <MuiCheckbox
            checked={checked}
            checkedIcon={checkedIcon}
            color={color}
            defaultChecked={defaultChecked}
            disabled={disabled}
            fontSize={fontSize}
            icon={icon}
            label={label}
            onChange={onChange}
            required={required}
            size={size}
            textcolor={textColor}
            {...rest}
        />
    );
};

export default Checkbox;
