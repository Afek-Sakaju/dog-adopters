import type { FC, MouseEventHandler, ReactNode } from 'react';
import React from 'react';

import type { MuiButtonVariant, MuiColor, MuiSize } from '@/types';
import { Box, FormHelperText, MuiButton } from './Button.styled';

interface ButtonProps {
    children?: ReactNode;
    color?: MuiColor;
    disabled?: boolean;
    disableElevation?: boolean;
    endIcon?: string | ReactNode;
    error?: boolean;
    helperText?: string;
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: MuiSize;
    startIcon?: string | ReactNode;
    variant?: MuiButtonVariant;
}

const Button: FC<ButtonProps> = (props): ReactNode => {
    const {
        children,
        color = 'primary',
        disabled,
        disableElevation,
        endIcon,
        error,
        helperText,
        label = '',
        onClick,
        size = 'medium',
        startIcon,
        variant = 'contained',
        ...rest
    } = props;

    return helperText ? (
        <Box>
            <MuiButton
                color={color}
                disabled={disabled}
                disableElevation={disableElevation}
                endIcon={endIcon}
                onClick={onClick}
                size={size}
                startIcon={startIcon}
                variant={variant}
                {...props}
            >
                {label}
                {children}
            </MuiButton>
            <FormHelperText error={error}>{helperText}</FormHelperText>
        </Box>
    ) : (
        <MuiButton
            color={color}
            disabled={disabled}
            disableElevation={disableElevation}
            endIcon={endIcon}
            onClick={onClick}
            size={size}
            startIcon={startIcon}
            variant={variant}
            {...rest}
        >
            {label}
            {children}
        </MuiButton>
    );
};

export default Button;
