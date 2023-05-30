import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export const Paper = styled(MuiPaper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 400px;
  gap: 4.1em;
  padding: 3.5em 6.5em;
`;

export const ColumnBox = styled(MuiBox)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.5em;
`;

export const Box = styled(MuiBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: max-content;
  gap: 0.5em;
`;

export const Title = styled(({ label, ...props }) => (
  <MuiTypography variant="h4" {...props}>
    {label}
  </MuiTypography>
))`
  font-weight: bold;
`;

export const Text = styled(({ label, ...props }) => (
  <MuiTypography variant="h7" {...props}>
    {label}
  </MuiTypography>
))`
  font-weight: bold;
`;

export const Link = styled(MuiLink)`
  font-weight: bold;
`;
