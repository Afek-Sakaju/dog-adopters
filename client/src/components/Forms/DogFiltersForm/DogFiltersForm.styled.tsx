import { styled } from '@mui/material/styles';
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
import MySubmitButton from '../../Common/SubmitButton/SubmitButton';

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

export const FormContainer = styled(MuiPaper)`
    width: 300px;
    height: 686px;
    display: flex;
    flex-direction: column;

    ${({ theme }) => `
        ${theme.breakpoints.down('xl')} {
            max-width: 230px;
        }
        ${theme.breakpoints.down('lg')} {
            max-width: 200px;
        }
        ${theme.breakpoints.down('md')} {
            max-width: 180px;
        }
        ${theme.breakpoints.down('sm')} {
            display: none;
        }
    `}
`;

export const InputContainer = styled(MuiBox)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 60px;
    ${({ theme }) => `
        ${theme.breakpoints.down('xl')} {
            padding-right: 35px;
        }
        ${theme.breakpoints.down('lg')} {
            padding-right: 30px;
        }
    `}
`;

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

    ${({ theme }) => `
        ${theme.breakpoints.down('xl')} {
            gap: 10px;
        }
        ${theme.breakpoints.down('lg')} {
            gap: 5px;
        }
    `}
`;

export const TextField = MyTextField;

export const Autocomplete = MyAutocomplete;

export const RadioGroup = MyRadioGroup;

export const FiltrationIcon = styled(MuiFiltrationIcon)`
    color: ${MAIN_COLORS.secondary};

    ${({ theme }) => `
        ${theme.breakpoints.down('md')} {
            font-size: 1.1rem;
        }
    `}
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
    ${({ theme }) => `
        ${theme.breakpoints.down('xl')} {
            font-size: 0.95rem;
        }
        ${theme.breakpoints.down('md')} {
            margin-left: 5px;
            font-size: 0.9rem;
        }
    `}
`;

export const RadioClearIconContainer = styled(MuiBox)`
    position: absolute;
    top: 32px;
    right: 0;
    width: 27px;
    height: 27px;
    padding: 0;
`;

export const DefaultClearIconContainer = styled(MuiBox)`
    position: absolute;
    top: 12px;
    right: 0;
    width: 27px;
    height: 27px;
    padding: 0;
`;

export const ClearIcon = styled(CleanResetIcon)`
    font-size: 1.2rem;
    color: ${MAIN_COLORS.feature};
`;

export const SubmitButton = MySubmitButton;
