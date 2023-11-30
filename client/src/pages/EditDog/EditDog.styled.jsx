import { styled } from '@mui/material/styles';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { Loader as MyLoader } from '@base-components';
import { IMAGES_SRC } from '@utils';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${IMAGES_SRC.EDIT_DOG_BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Loader = styled(MyLoader)`
    color: '#e91d25';
    margin-bottom: 300px;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
