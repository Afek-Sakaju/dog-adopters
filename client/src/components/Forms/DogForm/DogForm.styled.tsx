import React, { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Paper as MuiPaper,
    Typography as MuiTypography,
} from '@mui/material';
import {
    TbVaccine,
    TbVaccineOff,
    TbEraser as CleanResetIcon,
} from 'react-icons/tb';
import { BsImage as ImageIcon } from 'react-icons/bs';
import { MdDeleteForever as DeleteForeverIcon } from 'react-icons/md';
import {
    FaShieldDog as DogShieldIcon,
    FaDog as FreeDogIcon,
} from 'react-icons/fa6';

import {
    Autocomplete as MyAutocomplete,
    Select as MySelect,
    Checkbox as MyCheckbox,
    Avatar as MyAvatar,
    TextField as MyTextField,
} from '@/base-components';
import { MAIN_COLORS } from '@/utils';
import MyDogCard from '../../DogData/DogCard/DogCard';
import MyIconButton from '../../Common/IconButton/IconButton';
import MySubmitButton from '../../Common/SubmitButton/SubmitButton';

export const FormContainer = styled(MuiBox)`
    align-self: flex-start;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 32px;
`;

export const FormInnerContainer = styled(MuiBox)`
    display: flex;
    justify-content: center;
    gap: 200px;
`;

export const DogDisplayContainer = styled(MuiBox)`
    width: max-content;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const InputsContainer = styled(MuiPaper)`
    width: 35%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 22px;
`;

export const DogCard = styled(MyDogCard)`
    margin: auto;
    width: 335px;
    height: 400px;
`;

export const TextFieldsWrapper = styled(MuiBox)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',

    [theme.breakpoints.down('sm')]: {
        gap: '3px',
    },
}));

export const CheckboxesWrapper = styled(MuiBox)`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ImageInputWrapper = styled(MuiBox)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

export const FormTitle = styled(
    ({ children, ...props }: { children: ReactNode }) => (
        <MuiTypography component="div" {...props}>
            {children}
        </MuiTypography>
    )
)(({ theme }) => ({
    marginBottom: '10px',
    fontWeight: '600',

    [theme.breakpoints.down('md')]: {
        fontSize: '2.7em',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.6em',
        marginBottom: '0',
    },
}));

export const ButtonsContainer = styled(MuiBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const TextField = MyTextField;

export const SubmitButton = styled(MySubmitButton)`
    width: 120px;
    font-size: 1.1rem;
    text-transform: capitalize;
`;

export const IconButton = MyIconButton;

export const UploadImageButton = styled(MySubmitButton)(({ theme }) => ({
    width: '100%',
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
        fontSize: '0.8em',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.55em',
        padding: '0 4px',
    },
}));

export const Autocomplete = MyAutocomplete;

export const Select = MySelect;

export const Checkbox = MyCheckbox;

export const Avatar = MyAvatar;

export const AddImageIcon = styled(ImageIcon)`
    height: 60%;
    width: 70%;
`;

export const DesexedIcon = styled(DogShieldIcon)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: ${MAIN_COLORS.safe};
`;

export const NonDesexedIcon = styled(FreeDogIcon)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: ${MAIN_COLORS.error};
`;

export const VaccinatedIcon = styled(TbVaccine)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: ${MAIN_COLORS.safe};
`;

export const NonVaccinatedIcon = styled(TbVaccineOff)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: ${MAIN_COLORS.error};
`;

export const ClearIcon = styled(CleanResetIcon)`
    font-size: 1.2rem;
    color: ${MAIN_COLORS.feature};
`;

export const DeleteIcon = styled(DeleteForeverIcon)`
    font-size: 1.2rem;
    color: ${MAIN_COLORS.error};
`;

export const IconContainer = styled(MuiBox)`
    width: 30px;
    height: 30px;
`;
