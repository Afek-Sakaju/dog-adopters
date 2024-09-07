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
import MySubmitButton from '../../Common/SubmitButton/SubmitButton';

export const FormContainer = styled(MuiPaper)`
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainContentWrapper = styled(MuiBox)(({ theme }) => ({
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {
        width: '80%',
    },
}));

export const FormTitle = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" variant="h5" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    margin: 0,
    fontWeight: 'bold',

    [theme.breakpoints.down('md')]: {
        fontSize: '1.25em',
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

export const SubmitButton = styled(MySubmitButton)(({ theme }) => ({
    width: '45%',

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));

export const Divider = styled(MuiDivider)`
    margin-top: 30px;
    margin-bottom: 40px;
`;
