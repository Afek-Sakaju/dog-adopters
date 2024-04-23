import { styled } from '@mui/material/styles';
import MuiRadio from '@mui/material/Radio';
import MyRadioGroup from '@mui/material/RadioGroup';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiTypography from '@mui/material/Typography';

export const Radio = styled(MuiRadio)``;

export const MuiRadioGroup = styled(MyRadioGroup)``;

export const FormControlLabel = styled(MuiFormControlLabel)``;

export const FormControl = styled(MuiFormControl)``;

export const FormLabel = styled(MuiFormLabel)``;

export const HelperText = styled(MuiTypography, {
    shouldForwardProp: (prop) => prop !== 'isError',
})(({ isError }: { isError: boolean }) => ({
    ...(isError && { color: '#d32f2f' }),
    minHeight: '20px',
    margin: '0 14px 6px 14px',
    fontSize: '13px',
}));
