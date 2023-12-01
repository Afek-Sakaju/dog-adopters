import { styled } from '@mui/material/styles';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { IMAGES_SRC } from '@utils';
import { Loader as MyLoader } from '@base-components';
import { LoginForm as MyLoginForm } from '@components';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${IMAGES_SRC.LOGIN_BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const LoginForm = MyLoginForm;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = MyLoader;
