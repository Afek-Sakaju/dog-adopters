import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';
import MuiInput from '@mui/material/Input';
import { BsImage } from 'react-icons/bs';

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

export const HeaderWrapper = styled(MuiBox)`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const TextFieldsWrapper = styled(MuiBox)`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 6px 0;
    width: 100%;
`;

export const CheckboxesWrapper = styled(MuiBox)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ButtonsWrapper = styled(MuiBox)`
    display: flex;
    position: relative;
    margin-top: auto;
    width: 100%;
`;

export const ImageBox = styled(MuiBox)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 15px;
    flex: 1;
    margin-top: 10px;
`;

export const Title = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h3" {...props}>
        {children}
    </MuiTypography>
))`
    flex: 1;
    font-weight: bold;
`;

export const Text = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h7" {...props}>
        {children}
    </MuiTypography>
))`
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    white-space: pre-wrap;
    margin-bottom: 15px;
`;

export const TextField = MyTextField;

export const SubmitButton = styled(MyButton)`
    width: 30%;
    margin: 0 auto;
    font-weight: bolder;
`;

export const ResetButton = styled(MyButton)`
    position: absolute;
    right: 0;
    width: 10%;
    font-weight: bold;
`;

export const Input = styled(MuiInput)`
    display: flex;
    align-items: center;
    user-select: none;
    height: 70%;
    width: 100%;
    cursor: default;

    & > input {
        margin-left: 100px;
    }

    &::before {
        visibility: hidden;
    }
    &::after {
        visibility: hidden;
    }
`;

export const AddImageIcon = styled(BsImage)`
    height: 60%;
    width: 70%;
`;
