import { styled } from '@mui/material/styles';
import {
    FormControl as MuiFormControl,
    FormControlLabel as MuiFormControlLabel,
    FormLabel as MuiFormLabel,
    Radio as MuiRadio,
    RadioGroup as MyRadioGroup,
    Typography as MuiTypography,
} from '@mui/material';

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
