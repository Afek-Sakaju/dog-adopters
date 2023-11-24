import { styled } from '@mui/material/styles';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';

import { IMAGES_SRC } from '@utils';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-size: 50px 50px;
    background-image: url(${IMAGES_SRC.EDIT_DOG_BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const LoaderWrapper = styled(MuiBox)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 300px;
    gap: 50px;
`;

export const Title = styled(MuiTypography)`
    font-size: 3em;
    font-weight: bold;
`;

export const Loader = styled(LinearProgress)`
    width: 100%;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
