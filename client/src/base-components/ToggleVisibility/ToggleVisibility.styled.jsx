import React from 'react';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// eslint-disable-next-line import/prefer-default-export
export const EyeIcon = styled(({ isHidden, ...props }) =>
  isHidden ? <VisibilityOffIcon {...props} /> : <VisibilityIcon {...props} />
)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
