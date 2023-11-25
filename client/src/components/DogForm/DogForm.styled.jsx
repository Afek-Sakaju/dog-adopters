import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';
import { BsImage } from 'react-icons/bs';
import { FaShieldDog, FaDog } from 'react-icons/fa6';
import { TbVaccine, TbVaccineOff } from 'react-icons/tb';

import { TextField as MyTextField, Button as MyButton } from '@base-components';

export const FormContainer = styled(MuiPaper)(({ theme }) => ({
    width: '550px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '22px',
    marginTop: '65px',
    padding: '1.8em 3em',
    userSelect: 'none',

    [theme.breakpoints.down('md')]: {
        width: '73%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        gap: '10px',
        padding: '0.69em 0.3em',
    },
}));

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

export const FormTitle = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h3" {...props}>
        {children}
    </MuiTypography>
))(({ theme }) => ({
    flex: '1',
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

export const Text = styled(({ children, ...props }) => (
    <MuiTypography component="div" variant="h7" {...props}>
        {children}
    </MuiTypography>
))`
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    white-space: pre-wrap;
    margin-bottom: 15px;
`;

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

export const AddImageIcon = styled(BsImage)`
    height: 60%;
    width: 70%;
`;

export const DesexedIcon = styled(FaShieldDog)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: #388e3c;
`;
export const NonDesexedIcon = styled(FaDog)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: #d32f2f;
`;
export const VaccinatedIcon = styled(TbVaccine)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: #388e3c;
`;
export const NonVaccinatedIcon = styled(TbVaccineOff)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: #d32f2f;
`;
