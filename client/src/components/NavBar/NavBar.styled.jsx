import { styled } from '@mui/material/styles';

import { Button as MyButton, AppBar as MyAppBar } from '@base-components';

export const LoginButton = styled(MyButton)`
    padding: 4px 0;
    color: #1976d2;
    outline: #1976d2 1px solid;
    border-radius: 10px;
    background-color: white;
    font-size: 1em;
    font-weight: bold;
    text-transform: none;

    &:hover {
        background-color: #81b8f03a
    }
`;

export const RegisterButton = styled(MyButton)`
    padding: 4px 0;
    border-radius: 10px;
    font-size: 1em;
    font-weight: bold;
    text-transform: none;

    &:hover {
        background-color: #185ca0;
    }
`;

export const AppBar = styled(MyAppBar)`
    background-color: white;
`;
