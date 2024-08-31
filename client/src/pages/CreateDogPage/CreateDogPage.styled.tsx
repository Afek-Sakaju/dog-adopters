import { styled } from '@mui/material/styles';
import { Snackbar as MuiSnackbar, Alert as MuiAlert } from '@mui/material';

import { Loader as MyLoader } from '@/base-components';
import { DogForm as MyDogForm } from '@/components';

export const Page = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const DogForm = MyDogForm;

export const Loader = styled(MyLoader)`
    margin-bottom: 300px;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
