import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Pagination as MuiPagination,
    Paper as MuiPaper,
    Stack as MuiStack,
    Typography as MuiTypography,
    Zoom as MuiZoom,
} from '@mui/material';
import { GiDogHouse as DogHouseIcon } from 'react-icons/gi';

import { Loader as MyLoader } from '@/base-components';
import MyDogCard from '../DogCard/DogCard';

export const DogsListContainer = styled(MuiPaper)(({ theme }) => ({
    width: '893px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',

    [theme.breakpoints.down('xl')]: {
        marginTop: '80px',
        minWidth: '536px',
        maxWidth: '536px',
    },

    [theme.breakpoints.down('md')]: {
        height: '72%',
        marginTop: '95px',
    },

    [theme.breakpoints.down('sm')]: {
        marginTop: '95px',
        minWidth: '236px',
        maxWidth: '236px',
    },
}));

export const DogsListInnerContainer = styled(MuiBox)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
`;

export const DogListTitleContainer = styled(MuiBox)`
    min-height: 27px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 9px 0;
    background-color: #f1f1f1;
`;

export const DogListTitle = styled(MuiTypography)`
    margin: 0;
    font-size: 1.15rem;
    font-weight: 500;
    color: #b1a195;
`;

export const DogCard = MyDogCard;

export const PaginationBar = MuiPagination;

export const PaginationBarContainer = styled(MuiStack)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
`;

export const Loader = styled(MyLoader)`
    color: #1976d2;
`;

export const Zoom = MuiZoom;

export const KennelIcon = styled(DogHouseIcon)`
    width: 200px;
    height: 200px;
    color: #2986cc;
`;
