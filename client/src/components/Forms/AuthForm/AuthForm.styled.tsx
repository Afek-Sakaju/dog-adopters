import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Divider as MuiDivider,
    Paper as MuiPaper,
    Typography as MuiTypography,
    Link as MuiLink,
} from '@mui/material';

import {
    TextField as MyTextField,
    PasswordField as MyPasswordField,
} from '@/base-components';
import MySubmitButton from '../../Common/SubmitButton/SubmitButton';

export const MainContentWrapper = styled(MuiBox)`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 80%;
    }
`;

export const FormTitle = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" variant="h5" {...props}>
            {children}
        </MuiTypography>
    )
)`
    margin: 0;
    font-weight: bold;

    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 1.25em;
    }
`;

export const FormContainer = styled(MuiPaper)`
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Divider = styled(MuiDivider)`
    margin-top: 30px;
    margin-bottom: 40px;
`;

export const SubmitButton = styled(MySubmitButton)`
    padding: 0.7rem;
    width: 45%;

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 100%;
    }
`;

export const NavigationText = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" {...props}>
            {children}
        </MuiTypography>
    )
)`
    position: absolute;
    top: 38px;
    right: 45px;
    font-weight: bold;
    white-space: pre-wrap;

    ${({ theme }) => theme.breakpoints.down('md')} {
        top: 23px;
        right: 30px;
        font-size: 0.7em;
    }
`;

export const NavigationLink = styled(MuiLink)`
    font-weight: bold;
    cursor: pointer;
`;

export const TextField = styled(MyTextField)`
    margin-bottom: 20px;

    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-bottom: 10px;

        & .MuiInputBase-input {
            padding: 15px 10px;
            height: 20px;
        }
    }
`;

export const PasswordField = styled(MyPasswordField)`
    margin-bottom: 14px;

    ${({ theme }) => theme.breakpoints.down('md')} {
        & .MuiInputBase-input {
            padding: 15px 10px;
            height: 20px;
        }
    }
`;
