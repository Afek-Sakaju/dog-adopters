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
