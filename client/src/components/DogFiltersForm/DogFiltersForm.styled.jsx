import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import { TbEraser as RiClearIcon } from 'react-icons/tb';
import MuiFiltrationIcon from '@mui/icons-material/Tune';
import MuiCloseFiltersIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiOpenFiltersIcon from '@mui/icons-material/KeyboardArrowUp';

import {
    RadioGroup as MyRadioGroup,
    Button as MyButton,
    TextField as MyTextField,
    Autocomplete as MyAutocomplete,
    Icon as MyIcon,
} from '@/base-components';

export const Icon = MyIcon;

export const FormContainer = styled(MuiPaper, {
    shouldForwardProp: (prop) => prop !== 'shouldHideOnSmallScreens',
})(({ theme, shouldHideOnSmallScreens }) => ({
    width: '300px',
    height: '686px',
    display: 'flex',
    flexDirection: 'column',

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

export const InputContainer = styled(MuiBox)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingRight: '60px',

    [theme.breakpoints.down('xl')]: {
        paddingRight: '43px',
    },
}));

export const FormInputsContainer = styled(MuiBox)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 9px;
    overflow-y: auto;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 0 3px 3px 0;
        background-color: #e7e7e7;
        border: 1px solid #dadada9a;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0 3px 3px 0;
        background-color: #727272;
    }
`;

export const AgeInputsWrapper = styled(MuiBox)`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
`;

export const TextField = MyTextField;

export const Autocomplete = MyAutocomplete;

export const RadioGroup = MyRadioGroup;

export const FiltrationIcon = styled(MuiFiltrationIcon)`
    color: #b1a195;
`;

export const CloseFiltersIcon = styled(MuiCloseFiltersIcon)`
    margin-left: auto;
    color: #b1a195;
`;

export const OpenFiltersIcon = styled(MuiOpenFiltersIcon)`
    margin-left: auto;
    color: #b1a195;
`;

export const FormTitleContainer = styled(MuiBox)`
    min-height: 27px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 9px;
    background-color: #f1f1f1;

    &:hover {
        cursor: pointer;
    }
`;

export const FormTitle = styled(MuiTypography)`
    margin-left: 9px;
    font-size: 1.05rem;
`;

export const InputResetButton = styled(MyButton, {
    shouldForwardProp: (prop) => prop !== 'isButtonOfRadioGroup',
})(({ isButtonOfRadioGroup }) => ({
    position: 'absolute',
    ...(isButtonOfRadioGroup ? { top: '32px' } : { top: '2px' }),
    right: '0',
    minWidth: '27px',
    minHeight: '27px',
    maxWidth: '27px',
    maxHeight: '27px',
    padding: '0',
    borderRadius: '50%',
    backgroundColor: '#fafafa',
    fontSize: '1.1em',

    '&:hover': {
        backgroundColor: '#f1f3f5',
    },
}));

export const ClearIcon = styled(RiClearIcon)`
    padding: 0;
    color: #0d85e7;
`;

export const SubmitButton = styled(MyButton)`
    min-height: 40px;
`;
