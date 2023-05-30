import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const Paper = styled(MuiPaper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  padding: 2em 6em;
`;

export const ColumnBox = styled(MuiBox)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.5em;
  flex: 2;
`;

export const Box = styled(MuiBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: max-content;
  gap: 0.5em;
`;

export const Title = styled(({ children, ...props }) => (
  <MuiTypography variant="h4" {...props}>
    {children}
  </MuiTypography>
))`
  font-weight: bold;
`;

export const Text = styled(({ children, ...props }) => (
  <MuiTypography variant="h7" {...props}>
    {children}
  </MuiTypography>
))`
  font-weight: bold;
`;

export const Link = styled(MuiLink)`
  font-weight: bold;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
