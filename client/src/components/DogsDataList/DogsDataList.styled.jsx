import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';

import MyDogCard from '../DogCard/DogCard';

export const DogsListContainer = styled(MuiPaper)`
    min-width: 800px;
    max-width: 800px;
    height: 82%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    gap: 5px;
    padding: 15px;
    overflow-y: auto;
`;

export const DogCard = styled(MyDogCard)``;
