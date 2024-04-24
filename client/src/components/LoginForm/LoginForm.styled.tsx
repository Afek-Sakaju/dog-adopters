import React, { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import {
    TextField as MyTextField,
    PasswordField as MyPasswordField,
    Button as MyButton,
} from '@/base-components';

export const FormContainer = styled(MuiPaper)(({ theme }) => ({
    width: '500px',
    height: '420px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '12px',
    padding: '2.3em 6em',
    userSelect: 'none',

    [theme.breakpoints.down('md')]: {
        width: '65%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '78%',
        padding: '1em 2em',
    },
}));

export const FormTitle = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" variant="h4" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    marginBottom: 'auto',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.6em',
    },
}));

export const Text = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" variant="h6" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    marginTop: '45px',
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

export const TextField = MyTextField;

export const PasswordField = MyPasswordField;

export const SubmitButton = styled(MyButton)(({ theme }) => ({
    height: '47px',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8em',
    },
}));
