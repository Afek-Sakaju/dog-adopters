import React from 'react';
import { styled } from '@mui/material/styles';

import { TextField } from '@base-components';

// eslint-disable-next-line import/prefer-default-export
export const PasswordInput = styled(({ ...props }) => (
  <TextField
    variant="outlined"
    type="password"
    label="Password"
    required
    {...props}
  />
))``;
