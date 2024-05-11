import { Theme, styled } from '@mui/material/styles';
import {
    KeyboardArrowDown as MuiCloseFiltersIcon,
    KeyboardArrowUp as MuiOpenFiltersIcon,
    Tune as MuiFiltrationIcon,
} from '@mui/icons-material';
import {
    Box as MuiBox,
    Paper as MuiPaper,
    Typography as MuiTypography,
} from '@mui/material';
import { TbEraser as CleanResetIcon } from 'react-icons/tb';

import {
    RadioGroup as MyRadioGroup,
    TextField as MyTextField,
    Autocomplete as MyAutocomplete,
    Icon as MyIcon,
} from '@/base-components';
import { MAIN_COLORS, containerScrollbarStyles } from '@/utils';
import MySubmitButton from '../../Commons/SubmitButton/SubmitButton';

export const Icon = styled(MyIcon)`
    padding: 4px;
    border-radius: 100%;
    border: 1px solid ${MAIN_COLORS.bgAltColor};

    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${MAIN_COLORS.bgAltColor};
    }
    overflow: hidden;
`;

export const FormContainer = styled(MuiPaper, {
    shouldForwardProp: (prop) => prop !== 'shouldHideOnSmallScreens',
})(
    ({
        theme,
        shouldHideOnSmallScreens,
    }: {
        theme: Theme;
        shouldHideOnSmallScreens?: boolean;
    }) => ({
        width: '300px',
        height: '686px',
        display: 'flex',
        flexDirection: 'column',
        // @ts-ignore
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
    })
);

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

    ${containerScrollbarStyles}
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
    color: ${MAIN_COLORS.secondary};
`;

export const CloseFiltersIcon = styled(MuiCloseFiltersIcon)`
    margin-left: auto;
    color: ${MAIN_COLORS.secondary};
`;

export const OpenFiltersIcon = styled(MuiOpenFiltersIcon)`
    margin-left: auto;
    color: ${MAIN_COLORS.secondary};
`;

export const FormTitleContainer = styled(MuiBox)`
    min-height: 27px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 9px;
    background-color: ${MAIN_COLORS.bgAltColor};

    &:hover {
        cursor: pointer;
    }
`;

export const FormTitle = styled(MuiTypography)`
    margin-left: 9px;
    font-size: 1.05rem;
`;

export const ClearIconContainer = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'isButtonOfRadioGroup',
})(({ isButtonOfRadioGroup }: { isButtonOfRadioGroup?: boolean }) => ({
    position: 'absolute',
    ...(isButtonOfRadioGroup ? { top: '32px' } : { top: '12px' }),
    right: '0',
    minWidth: '27px',
    minHeight: '27px',
    maxWidth: '27px',
    maxHeight: '27px',
    padding: '0',
}));

export const ClearIcon = styled(CleanResetIcon)`
    font-size: 1.2rem;
    color: ${MAIN_COLORS.feature};
`;

export const SubmitButton = MySubmitButton;
