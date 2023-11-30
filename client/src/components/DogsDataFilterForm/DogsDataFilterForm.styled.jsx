import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TbEraser as MyClearIcon } from 'react-icons/tb';

import {
    RadioGroup as MyRadioGroup,
    Button as MyButton,
    TextField as MyTextField,
    Autocomplete as MyAutocomplete,
} from '@base-components';

export const FormContainer = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'shouldHideOnSmallScreens',
})(({ theme, shouldHideOnSmallScreens }) => ({
    position: 'absolute',
    left: '110px',
    maxWidth: '270px',
    height: '686px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '100px auto 0 auto',
    padding: '25px 35px',
    boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px,' +
        'rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,' +
        'rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    userSelect: 'none',

    [theme.breakpoints.down('xxl')]: {
        position: 'static',
        left: 'unset',
    },

    [theme.breakpoints.down('xl')]: {
        maxWidth: '235px',
        height: '706px',
        padding: '15px 25px',
        marginTop: '80px',
    },

    [theme.breakpoints.down('md')]: {
        maxWidth: '270px',
        height: '70%',
        margin: '0',
        padding: '5px 15px',
        ...(shouldHideOnSmallScreens && { display: 'none' }),
        ...(shouldHideOnSmallScreens && { visibility: 'hidden' }),
    },
}));

export const InputContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingRight: '60px',

    [theme.breakpoints.down('xl')]: {
        paddingRight: '43px',
    },
}));

export const AgeInputsWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
`;

export const TextField = MyTextField;

export const Autocomplete = MyAutocomplete;

export const RadioGroup = MyRadioGroup;

export const FormTitle = styled(Typography)`
    font-size: 1.5em;
`;

export const InputResetButton = styled(MyButton, {
    shouldForwardProp: (prop) => prop !== 'isButtonOfRadioGroup',
})(({ isButtonOfRadioGroup }) => ({
    position: 'absolute',
    ...(isButtonOfRadioGroup ? { top: '32px' } : { top: '2px' }),
    right: '0',
    minWidth: '27px',
    minHeight: '27px',
    padding: '0',
    borderRadius: '50%',
    backgroundColor: '#fafafa',
    fontSize: '1.1em',

    '&:hover': {
        backgroundColor: '#f1f3f5',
    },
}));

export const ClearIcon = styled(MyClearIcon)`
    padding: 0;
    color: #0d85e7;
`;

export const SubmitButton = styled(MyButton)``;
