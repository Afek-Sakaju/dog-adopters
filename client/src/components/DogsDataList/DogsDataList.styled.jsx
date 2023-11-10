import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';

import MyDogCard from '../DogCard/DogCard';

export const DogsListContainer = styled(MuiPaper)`
    min-width: 700px;
    height: 90%;
    overflow-y: auto;
`;

export const DogCard = styled(MyDogCard)``;
