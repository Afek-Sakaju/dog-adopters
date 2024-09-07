import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Divider as MuiDivider,
    Paper as MuiPaper,
    Typography as MuiTypography,
} from '@mui/material';

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
