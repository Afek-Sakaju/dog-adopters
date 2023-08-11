import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';
import MuiInput from '@mui/material/Input';
import MuiInputLabel from '@mui/material/InputLabel';

import { TextField as MyTextField, Button as MyButton } from '@base-components';

export const Paper = styled(MuiPaper)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 750px;
    height: 700px;
    padding: 1.8em 3em;
    gap: 20px;
`;

export const TextFieldsWrapper = styled(MuiBox)`
    display: flex;
    gap: 15px;
    margin: 6px 0;
    flex: 4;
    width: 100%;
`;

export const CheckboxesWrapper = styled(MuiBox)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h4" {...props}>
        {children}
    </MuiTypography>
))`
    flex: 2.2;
    font-weight: bold;
`;

export const Text = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h7" {...props}>
        {children}
    </MuiTypography>
))`
    display: flex;
    align-items: flex-end;
    flex: 1.3;
    font-weight: bold;
    white-space: pre-wrap;
    margin-bottom: 15px;
`;

export const TextField = MyTextField;

export const UploadFileButton = styled(MyButton)`
    flex: 0.5;
    text-transform: none;
    font-size: 0.7em;
`;

export const Button = styled(MyButton)`
    flex: 1;
    padding: 0.5em;
    width: 70%;
`;

export const Input = styled(MuiInput)``;

export const InputLabel = styled(MuiInputLabel)``;
