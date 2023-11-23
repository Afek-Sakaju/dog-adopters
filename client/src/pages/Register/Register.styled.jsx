import { styled } from '@mui/material/styles';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { PAGES_BACKGROUNDS } from '@utils';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${PAGES_BACKGROUNDS.REGISTER});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
