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

export const FormContainer = styled(MuiPaper)`
    width: 500px;
    height: 530px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
    padding: 2.3em 6em;
    user-select: none;
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
    margin-top: 16px;
    margin-bottom: 5px;
    font-weight: bold;
    white-space: pre-wrap;
`;

export const Link = styled(MuiLink)`
    font-weight: bold;
    cursor: pointer;
`;

export const TextField = MyTextField;

export const PasswordField = MyPasswordField;

export const SubmitButton = styled(MyButton)`
    height: 47px;
    font-weight: bold;
`;
