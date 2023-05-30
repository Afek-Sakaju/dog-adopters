import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {
  TextField as MyTextField,
  PasswordField as MyPasswordField,
  Button as MyButton,
} from '@base-components';

export const Paper = styled(MuiPaper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  padding: 2em 6em;
  gap: 5em;
`;

export const Title = styled(({ children, ...props }) => (
  <MuiTypography component="div" variant="h4" {...props}>
    {children}
  </MuiTypography>
))`
  flex: 2 1 auto;
  font-weight: bold;
`;

export const Text = styled(({ children, ...props }) => (
  <MuiTypography component="div" variant="h7" {...props}>
    {children}
  </MuiTypography>
))`
  flex: 2 1 auto;
  font-weight: bold;
`;

export const Link = styled(MuiLink)`
  font-weight: bold;
`;

export const TextField = styled(MyTextField)`
  flex: 1 2 auto;
`;

export const PasswordField = styled(MyPasswordField)`
  flex: 1 2 auto;
`;

export const Button = styled(MyButton)`
  flex: 1 2 auto;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

// export const ColumnBox = styled(MuiBox)`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   gap: 1.5em;
// `;

// export const Box = styled(MuiBox)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: max-content;
//   gap: 0.5em;
// `;
