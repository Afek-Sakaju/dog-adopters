import React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

interface MuiCheckboxProps {
    helperText?: string;
    label?: string;
    [key: string]: unknown;
}

// eslint-disable-next-line import/prefer-default-export
export const MuiCheckbox = styled(
    ({ helperText, label, ...props }: MuiCheckboxProps) => (
        <>
            <FormControlLabel
                control={<Checkbox {...props} />}
                label={label}
                sx={{ userSelect: 'none', width: 'min-content' }}
            />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </>
    )
)``;
