import { styled } from '@mui/material/styles';
import {
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';

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
