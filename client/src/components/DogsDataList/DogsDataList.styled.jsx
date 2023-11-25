import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import MuiStack from '@mui/material/Stack';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiPagination from '@mui/material/Pagination';
import MuiLoader from '@mui/material/CircularProgress';
import MuiZoom from '@mui/material/Zoom';

import MyDogCard from '../DogCard/DogCard';

export const DogsListContainer = styled(MuiPaper)`
    min-width: 815px;
    max-width: 815px;
    height: 706px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 130px;
    padding: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    transform: translateZ(0);
    -webkit-transform: translateZ(0);

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 0 3px 3px 0;
        background-color: #e7e7e7;
        border: 1px solid #dadada9a;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0 3px 3px 0;
        background-color: #727272;
    }
`;

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

export const Loader = styled(MuiLoader)`
    margin: auto;
    color: #e91d25;
`;

export const DataListText = styled(MuiTypography)`
    margin: 150px auto 0 auto;
    font-size: 2em;
`;

export const Zoom = MuiZoom;
