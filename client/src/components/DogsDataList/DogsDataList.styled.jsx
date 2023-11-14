import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';

import MyDogCard from '../DogCard/DogCard';

export const DogsListContainer = styled(MuiPaper)`
    min-width: 800px;
    max-width: 800px;
    min-height: 706px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    gap: 20px;
    padding: 15px;
    overflow-y: auto;
    overflow-x: hidden;

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

export const DogCard = styled(MyDogCard)``;
