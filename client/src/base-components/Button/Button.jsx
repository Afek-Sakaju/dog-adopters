import React from 'react';
import PropTypes from 'prop-types';

import { MUI_VARIANTS, MUI_COLORS, MUI_SIZES } from '@utils';
import { MuiButton, FormHelperText, Box } from './Button.styled';

export default function Button({
    color,
    disabled,
    disableElevation,
    endIcon,
    error,
    label,
    onClick,
    size,
    startIcon,
    variant,
    children,
    helperText,
    ...props
}) {
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
            {...props}
        >
            {label}
            {children}
        </MuiButton>
    );
}

Button.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    disableElevation: PropTypes.bool,
    endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.bool,
    helperText: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(MUI_SIZES),
    startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    variant: PropTypes.oneOf(MUI_VARIANTS.BUTTON),
};

Button.defaultProps = {
    color: MUI_COLORS[0],
    disabled: undefined,
    disableElevation: undefined,
    endIcon: undefined,
    error: undefined,
    helperText: undefined,
    label: '',
    onClick: undefined,
    size: MUI_SIZES[1],
    startIcon: undefined,
    variant: 'contained',
};
