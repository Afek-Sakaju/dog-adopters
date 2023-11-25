import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import {
    TextField as MyTextField,
    PasswordField as MyPasswordField,
    Button as MyButton,
} from '@base-components';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url('/doggo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const FormContainer = styled(MuiPaper)`
    width: 500px;
    height: 420px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    padding: 2.3em 6em;
`;

export const FormTitle = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h4" {...props}>
        {children}
    </MuiTypography>
))`
    margin-bottom: auto;
    font-weight: bold;
`;

export const Text = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h7" {...props}>
        {children}
    </MuiTypography>
))`
    display: flex;
    align-items: flex-end;
    margin-top: 45px;
    font-weight: bold;
    white-space: pre-wrap;
`;

export const Link = styled(MuiLink)`
    font-weight: bold;
    cursor: pointer;
`;

export const TextField = MyTextField;

export const PasswordField = MyPasswordField;

export const Button = styled(MyButton)`
    height: 47px;
    font-weight: bold;
`;
