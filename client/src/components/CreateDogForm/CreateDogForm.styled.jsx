import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

import { TextField as MyTextField, Button as MyButton } from '@base-components';

export const Paper = styled(MuiPaper)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 500px;
    padding: 2.3em 6em;
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

export const Link = styled(MuiLink)`
    font-weight: bold;
`;

export const TextField = styled(MyTextField)`
    flex: 1.5;
    margin: 6px 0;
`;

export const Button = styled(MyButton)`
    flex: 1;
`;
