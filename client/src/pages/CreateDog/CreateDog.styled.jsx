import { styled } from '@mui/material/styles';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { Loader as MyLoader } from '#base-components';
import { DogForm as MyDogForm } from '#components';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #fdf7e4;
`;

export const DogForm = MyDogForm;

export const Loader = styled(MyLoader)`
    margin-bottom: 300px;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
