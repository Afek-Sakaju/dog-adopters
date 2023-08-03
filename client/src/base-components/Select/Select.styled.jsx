import { styled } from '@mui/material/styles';
import MySelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';

export const MuiSelect = styled(MySelect)`
    height: 56px;
`;

export const MenuItem = styled(MuiMenuItem)`
    font-weight: bolder;
`;

export const FormControl = MuiFormControl;

export const InputLabel = MuiInputLabel;
