import type { FC, MouseEventHandler, ReactNode } from 'react';
import React from 'react';

import type { MuiButtonVariant, MuiColor, MuiSize } from '@/types';
import { StyledButton } from './SubmitButton.styled';

interface SubmitButtonProps {
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
    [key: string]: unknown;
}

const SubmitButton: FC<SubmitButtonProps> = (props): ReactNode => {
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

    return (
        <StyledButton
            color={color}
            disabled={disabled}
            disableElevation={disableElevation}
            endIcon={endIcon}
            error={error}
            helperText={helperText}
            label={label}
            onClick={onClick}
            size={size}
            startIcon={startIcon}
            variant={variant}
            {...rest}
        >
            {children}
        </StyledButton>
    );
};

export default SubmitButton;
