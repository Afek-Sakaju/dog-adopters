import React, { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Link as MuiLink, Typography as MuiTypography } from '@mui/material';

import {
    TextField as MyTextField,
    PasswordField as MyPasswordField,
} from '@/base-components';

export const Text = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    position: 'absolute',
    top: 38,
    right: 45,
    fontWeight: 'bold',
    whiteSpace: 'pre-wrap',

    [theme.breakpoints.down('md')]: {
        top: 23,
        right: 30,
        fontSize: '0.7em',
    },
}));

export const Link = styled(MuiLink)`
    font-weight: bold;
    cursor: pointer;
`;

export const TextField = styled(MyTextField)`
    margin-bottom: 20px;
`;

export const PasswordField = styled(MyPasswordField)`
    margin-bottom: 14px;
`;