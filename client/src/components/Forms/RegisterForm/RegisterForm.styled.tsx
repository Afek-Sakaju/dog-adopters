import React, { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Divider as MuiDivider,
    Link as MuiLink,
    Paper as MuiPaper,
    Typography as MuiTypography,
} from '@mui/material';

import {
    TextField as MyTextField,
    PasswordField as MyPasswordField,
} from '@/base-components';
import MySubmitButton from '../../Commons/SubmitButton/SubmitButton';

export const FormContainer = styled(MuiPaper)(({ theme }) => ({
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        width: '65%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '78%',
        padding: '1em 2em',
    },
}));

export const MainContentWrapper = styled(MuiBox)`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const FormTitle = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" variant="h5" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    margin: 0,
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.6em',
    },
}));

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

export const SubmitButton = MySubmitButton;

export const Divider = styled(MuiDivider)`
    margin-top: 30px;
    margin-bottom: 40px;
`;
