import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import MuiBox from '@mui/material/Box';
import MuiFormHelperText from '@mui/material/FormHelperText';

export const MuiButton = styled(Button)`
    min-height: 30px;
    min-width: 60px;
`;

export const FormHelperText = MuiFormHelperText;

export const Box = styled(MuiBox)`
    display: flex;
    flex-direction: column;
`;
