import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TbEraser as MyClearIcon } from 'react-icons/tb';

import {
    RadioGroup as MyRadioGroup,
    Button as MyButton,
    TextField as MyTextField,
    Select as MySelect,
} from '@base-components';

export const FormContainer = styled(Paper)`
    max-width: 270px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 25px 35px;
    user-select: none;
`;

export const InputContainer = styled(Box)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 60px;
`;

export const AgeInputsWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
`;

export const TextField = MyTextField;

export const Select = MySelect;

export const RadioGroup = styled(MyRadioGroup)``;

export const FormTitle = styled(Typography)`
    font-size: 1.5em;
`;

export const InputResetButton = styled(MyButton)`
    position: absolute;
    right: 0;
    top: 2px;
    min-width: 27px;
    min-height: 27px;
    padding: 0;
    border-radius: 50%;
    background-color: #fafafa;
    font-size: 1.1em;

    &:hover {
        background-color: #f1f3f5;
    }
`;

export const RadioGroupResetButton = styled(MyButton)`
    position: absolute;
    right: 0;
    top: 32px;
    min-width: 27px;
    min-height: 27px;
    padding: 0;
    border-radius: 50%;
    background-color: #fafafa;
    font-size: 1.1em;

    &:hover {
        background-color: #f1f3f5;
    }
`;

export const ClearIcon = styled(MyClearIcon)`
    padding: 0;
    color: #0d85e7;
`;

export const SubmitButton = styled(MyButton)``;
