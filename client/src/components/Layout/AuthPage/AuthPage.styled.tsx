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

export const WebsiteDescription = styled(MuiBox)`
    white-space: pre-line;
    font-size: 1.35rem;
    line-height: 1.4em;
    font-weight: 600;
    color: ${MAIN_COLORS.textSecondary};

    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 1rem;
    }
`;

export const SideContentWrapper = styled(MuiBox)`
    height: 100%;
    flex: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    background-color: ${MAIN_COLORS.primaryLight};

    ${({ theme }) => theme.breakpoints.down('sm')} {
        display: none;
    }
`;

export const FormContentWrapper = styled(MuiBox)`
    height: 100%;
    flex: 16;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = MyLoader;

export const AppLogo = styled('img')`
    width: 112px;
    height: 63px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.07);
    }
`;

export const AdoptionImage = styled(MuiBox)`
    width: 25rem;
    height: 30rem;
    background: url(${IMAGES_SRC.ADOPTION_IMAGE_1});
    background-size: cover;
    background-position: center;

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 17rem;
        height: 22rem;
    }
`;
