import { styled } from '@mui/material/styles';
import {
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
    Box as MuiBox,
    Typography as MuiTypography,
} from '@mui/material';
import { MdOutlineModeEditOutline as PencilIcon } from 'react-icons/md';

import { Loader as MyLoader } from '@/base-components';
import { ClearIconButton as MyIconButton } from '@/components';
import { MAIN_COLORS } from '@/utils';

export const PageContainer = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const MainContainer = styled(MuiBox)`
    width: 60%;
    display: flex;
    border: 1px solid ${MAIN_COLORS.bgAltColor};
`;

export const DogImagePreviewContainer = styled(MuiBox)`
    flex: 5;
`;

export const EditDogSection = styled(MuiBox)`
    display: flex;
    justify-content: center;
`;

export const DogInformationContentWrapper = styled(MuiBox)`
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
`;

export const DogImage = styled('img')`
    height: auto;
    width: 100%;
    aspect-ratio: 5/4;
    object-fit: cover;
    object-position: center;
`;

export const Text = styled(MuiTypography)`
    font-size: 1.1rem;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = styled(MyLoader)`
    margin-bottom: 300px;
`;

export const IconButton = styled(MyIconButton)``;

export const EditIcon = styled(PencilIcon)`
    font-size: 1.1rem;
    color: ${MAIN_COLORS.safe};
`;
