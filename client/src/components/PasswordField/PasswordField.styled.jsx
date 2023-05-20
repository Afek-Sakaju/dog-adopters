import React from 'react';
import { styled } from '@mui/material/styles';

import { TextField } from '@base-components';

// eslint-disable-next-line import/prefer-default-export
export const PasswordInput = styled(({ isHidden, ...props }) => (
  <TextField
    variant="outlined"
    type={isHidden ? 'password' : 'text'}
    label="Password"
    required
    {...props}
  />
))``;
