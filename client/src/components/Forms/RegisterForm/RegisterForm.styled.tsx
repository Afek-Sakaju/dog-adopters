import React, { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
    Divider as MuiDivider,
    Link as MuiLink,
    Typography as MuiTypography,
} from '@mui/material';

import {
    TextField as MyTextField,
    PasswordField as MyPasswordField,
} from '@/base-components';
import MySubmitButton from '../../Common/SubmitButton/SubmitButton';

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

    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8em',
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
    margin-bottom: 12px;
`;

export const SubmitButton = styled(MySubmitButton)`
    padding: 0.7em;
`;

export const Divider = styled(MuiDivider)`
    margin-top: 30px;
    margin-bottom: 40px;
`;
