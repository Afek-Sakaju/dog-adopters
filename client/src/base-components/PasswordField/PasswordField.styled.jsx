import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import TextField from '../TextField/TextField';

export const PasswordInput = styled(TextField)``;

export const VisibleIcon = styled(VisibilityIcon)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const InvisibleIcon = styled(VisibilityOffIcon)`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
