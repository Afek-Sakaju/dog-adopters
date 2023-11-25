import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';
import { BsImage } from 'react-icons/bs';
import { FaShieldDog, FaDog } from 'react-icons/fa6';
import { TbVaccine, TbVaccineOff } from 'react-icons/tb';

import { TextField as MyTextField, Button as MyButton } from '@base-components';

export const FormContainer = styled(MuiPaper)`
    width: 550px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 22px;
    margin-top: 65px;
    padding: 1.8em 3em;
    user-select: none;
`;

export const TextFieldsWrapper = styled(MuiBox)`
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
`;

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
))`
    flex: 1;
    font-weight: bold;
    margin-bottom: 20px;
`;

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

export const InputResetButton = styled(MyButton)`
    position: absolute;
    right: 0;
    width: 10%;
    font-weight: bold;
`;

export const DeleteButton = styled(MyButton)`
    position: absolute;
    left: 0;
    width: 12%;
    font-weight: bold;
`;

export const UploadImageButton = styled(MyButton)`
    height: 70%;
    font-weight: bold;
`;

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
