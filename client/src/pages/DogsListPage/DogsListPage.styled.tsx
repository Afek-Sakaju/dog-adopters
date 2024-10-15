import { styled } from '@mui/material/styles';
import { Dialog as MuiDialog } from '@mui/material';

import {
    DogFiltersForm as MyDogFiltersForm,
    DogsList as MyDogsDataList,
} from '@/components';

export const Page = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const MainContentContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '50px',
    marginTop: '32px',
    overflowY: 'hidden',

    [theme.breakpoints.down('xl')]: {
        gap: '25px',
    },

    [theme.breakpoints.down('lg')]: {
        gap: '20px',
    },

    [theme.breakpoints.down('md')]: {
        gap: '5px',
    },
}));

export const DogFiltersForm = MyDogFiltersForm;

export const DogsList = MyDogsDataList;

export const Dialog = styled(MuiDialog)`
    .MuiPaper-root {
        margin: 5px !important;
    }
`;