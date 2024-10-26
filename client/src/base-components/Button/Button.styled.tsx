import { styled } from '@mui/material/styles';
import {
    Button,
    Box as MuiBox,
    FormHelperText as MuiFormHelperText,
} from '@mui/material';

export const MuiButton = styled(Button)`
    min-height: 30px;
    min-width: 60px;
    border-radius: 17px;
`;

export const FormHelperText = MuiFormHelperText;

export const Box = styled(MuiBox)`
    display: flex;
    flex-direction: column;
`;
