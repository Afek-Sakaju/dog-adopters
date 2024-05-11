import { styled } from '@mui/material/styles';
import {
    Button,
    Box as MuiBox,
    FormHelperText as MuiFormHelperText,
} from '@mui/material';

import { mainBorderRadius } from '@/utils';

export const MuiButton = styled(Button)`
    min-height: 30px;
    min-width: 60px;
    border-radius: ${mainBorderRadius};
`;

export const FormHelperText = MuiFormHelperText;

export const Box = styled(MuiBox)`
    display: flex;
    flex-direction: column;
`;
