import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
} from '@mui/material';

import { Loader as MyLoader } from '@/base-components';
import { IMAGES_SRC, MAIN_COLORS } from '@/utils';

export const Page = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const WebsiteDescriptionContainer = styled(MuiBox)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const WebsiteDescription = styled(MuiBox)(({ theme }) => ({
    whiteSpace: 'pre-line',
    fontSize: '1.35rem',
    lineHeight: '1.4em',
    fontWeight: 600,
    color: MAIN_COLORS.textSecondary,

    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
}));


export const SideContentWrapper = styled(MuiBox)(({ theme }) => ({
    height: '100%',
    flex: 11,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '40px',
    backgroundColor: MAIN_COLORS.primaryLight,

    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

export const FormContentWrapper = styled(MuiBox)`
    height: 100%;
    flex: 16;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = MyLoader;

export const AppLogo = styled('img')(() => ({
    width: '112px',
    height: '63px',
    transition: 'transform 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.07)',
    },
}));

export const AdoptionImage = styled(MuiBox)(({ theme }) => ({
    width: '25rem',
    height: '30rem',
    background: `url(${IMAGES_SRC.ADOPTION_IMAGE_1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.breakpoints.down('md')]: {
        width: '17rem',
        height: '22rem',
    },
}));
