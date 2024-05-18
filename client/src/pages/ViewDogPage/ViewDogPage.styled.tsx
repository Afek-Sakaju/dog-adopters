import { styled } from '@mui/material/styles';
import {
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
    Box as MuiBox,
    Typography as MuiTypography,
} from '@mui/material';
import { MdOutlineModeEditOutline as PencilIcon } from 'react-icons/md';
import {
    FemaleRounded as MuiFemaleIcon,
    MaleRounded as MuiMaleIcon,
} from '@mui/icons-material';

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
    height: 65%;
    width: 60%;
    position: relative;
    display: flex;
    border: 1px solid ${MAIN_COLORS.secondary};
    border-radius: 20px;
    overflow: hidden;
`;

export const DogImage = styled('img')`
    flex: 5;
    height: auto;
    width: 100%;
    aspect-ratio: 5/4;
    object-fit: cover;
    object-position: center;
`;

export const DogNameText = styled(MuiTypography)`
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: ${MAIN_COLORS.primary};
`;

export const DogInformationContentWrapper = styled(MuiBox)`
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px;
    overflow-y: auto;
    white-space: pre-wrap;

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #dddddd;
        border-radius: 0 25px 25px 0;
        border: 25px solid transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #a7a7a7;
    }
`;

export const DogGenderContentWrapper = styled(MuiBox)`
    display: flex;
    align-items: center;
`;

export const DogInformationText = styled(MuiTypography)`
    font-size: 1.08rem;
`;

export const IconButton = MyIconButton;

export const EditButtonContainer = styled(MuiBox)`
    position: absolute;
    top: 11px;
    right: 12px;
`;

export const EditIcon = styled(PencilIcon)`
    font-size: 1.15rem;
    color: ${MAIN_COLORS.textSecondary};
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;

export const Loader = styled(MyLoader)`
    margin-bottom: 300px;
`;

export const MaleIcon = styled(MuiMaleIcon)`
    height: 17px;
    color: ${MAIN_COLORS.male};
`;

export const FemaleIcon = styled(MuiFemaleIcon)`
    height: 19px;
    color: ${MAIN_COLORS.female};
`;
