import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiStack from '@mui/material/Stack';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiPagination from '@mui/material/Pagination';
import MuiZoom from '@mui/material/Zoom';

import { Loader as MyLoader } from '#base-components';
import MyDogCard from '../DogCard/DogCard';

export const DogsListContainer = styled(MuiPaper)(({ theme }) => ({
    minWidth: '815px',
    maxWidth: '815px',
    height: '706px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    margin: '100px auto 0 auto',
    padding: '15px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px,' +
        'rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,' +
        'rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    transform: 'translateZ(0)',

    webkitTransform: 'translateZ(0)',

    '&::-webkit-scrollbar': {
        width: '12px',
    },

    '&::-webkit-scrollbar-track': {
        borderRadius: '0 3px 3px 0',
        backgroundColor: '#e7e7e7',
        border: '1px solid #dadada9a',
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
    },

    '&::-webkit-scrollbar-thumb': {
        borderRadius: '0 3px 3px 0',
        backgroundColor: '#727272',
    },

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

export const DataListText = styled(MuiTypography)`
    margin: 150px auto 0 auto;
    font-size: 2em;
`;

export const Zoom = MuiZoom;
