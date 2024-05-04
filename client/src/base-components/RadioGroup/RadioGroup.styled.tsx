import { styled } from '@mui/material/styles';
import {
    FormControl as MuiFormControl,
    FormControlLabel as MuiFormControlLabel,
    FormLabel as MuiFormLabel,
    Radio as MuiRadio,
    RadioGroup as MyRadioGroup,
    Typography as MuiTypography,
} from '@mui/material';

import { MAIN_COLORS } from '@/utils';

export const Radio = styled(MuiRadio)``;

export const MuiRadioGroup = styled(MyRadioGroup)``;

export const FormControlLabel = styled(MuiFormControlLabel)``;

export const FormControl = styled(MuiFormControl)``;

export const FormLabel = styled(MuiFormLabel)``;

export const HelperText = styled(MuiTypography, {
    shouldForwardProp: (prop) => prop !== 'isError',
})(({ isError }: { isError: boolean }) => ({
    ...(isError && { color: MAIN_COLORS.error }),
    minHeight: '20px',
    margin: '0 14px 6px 14px',
    fontSize: '13px',
}));
