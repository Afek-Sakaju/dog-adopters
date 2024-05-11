import React, { type ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Paper as MuiPaper,
    Typography as MuiTypography,
} from '@mui/material';
import { TbVaccine, TbVaccineOff } from 'react-icons/tb';
import { BsImage as ImageIcon } from 'react-icons/bs';
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
    Button as MyButton,
} from '@/base-components';
import { MAIN_COLORS } from '@/utils';
import MyDogCard from '../../DogsData/DogCard/DogCard';

export const FormContainer = styled(MuiBox)`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 200px;
    padding: 0 30px;
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
    user-select: none;
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

export const ButtonsWrapper = styled(MuiBox)`
    display: flex;
    position: relative;
    margin-top: auto;
    width: 100%;
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
    marginBottom: '20px',
    fontWeight: 'bold',

    [theme.breakpoints.down('md')]: {
        fontSize: '2.7em',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.6em',
        marginBottom: '0',
    },
}));

export const TextField = MyTextField;

export const SubmitButton = styled(MyButton)`
    width: 30%;
    margin: 0 auto;
    font-weight: bolder;
`;

export const InputResetButton = styled(MyButton)(({ theme }) => ({
    position: 'absolute',
    right: '0',
    width: '10%',
    fontWeight: 'bold',

    [theme.breakpoints.down('md')]: {
        fontSize: '0.8em',
    },
    [theme.breakpoints.down('sm')]: {},
}));

export const DeleteButton = styled(MyButton)(({ theme }) => ({
    position: 'absolute',
    left: '0',
    width: '12%',
    fontWeight: 'bold',

    [theme.breakpoints.down('md')]: {
        fontSize: '0.8em',
    },
}));

export const UploadImageButton = styled(MyButton)(({ theme }) => ({
    height: '70%',
    textAlign: 'center',
    fontWeight: 'bold',

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
