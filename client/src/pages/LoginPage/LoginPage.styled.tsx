import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
} from '@mui/material';

import { Loader as MyLoader } from '@/base-components';
import { LoginForm as MyLoginForm } from '@/components';

export const PageContainer = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SideContentWrapper = styled(MuiBox)`
    height: 100%;
    flex: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffdab9;
`;

export const LoginFormContentWrapper = styled(MuiBox)`
    height: 100%;
    flex: 16;
`;

export const LoginForm = MyLoginForm;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = MyLoader;

export const AppLogo = styled('img')(({ theme }) => ({
    width: '320px',
    height: '180px',
    transition: 'transform 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.3)',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '56px',
    },
}));
