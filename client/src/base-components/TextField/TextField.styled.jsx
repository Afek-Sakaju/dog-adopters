import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// eslint-disable-next-line import/prefer-default-export
export const MuiTextField = styled(
  ({ startCmp, endCmp, readOnly, ...props }) => (
    <TextField
      {...props}
      InputProps={{
        readOnly,
        ...(startCmp && {
          startAdornment: (
            <InputAdornment position="start">{startCmp}</InputAdornment>
          ),
        }),
        ...(endCmp && {
          endAdornment: (
            <InputAdornment position="end">{endCmp}</InputAdornment>
          ),
        }),
      }}
      readOnly={readOnly}
      {...props}
    />
  )
)``;
