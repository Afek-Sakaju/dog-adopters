import { styled } from '@mui/material/styles';
import {
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
    Box as MuiBox,
    Typography as MuiTypography,
} from '@mui/material';
import { MdOutlineModeEditOutline as PencilIcon } from 'react-icons/md';

import { Loader as MyLoader, Card as MyCard } from '@/base-components';
import { ClearIconButton as MyIconButton } from '@/components';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const MainContainer = styled(MuiBox)``;

export const DogImagePreviewContainer = styled(MuiBox)``;

export const EditDogSection = styled(MuiBox)``;

export const DogInformationContentWrapper = styled(MuiBox)``;

export const DogImage = styled(MyCard)``;

export const Text = styled(MuiTypography)``;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = styled(MyLoader)`
    margin-bottom: 300px;
`;

export const IconButton = styled(MyIconButton)``;

export const EditIcon = styled(PencilIcon)``;
