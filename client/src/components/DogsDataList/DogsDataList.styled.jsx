import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

import MyDogCard from '../DogCard/DogCard';

export const DogsListContainer = styled(MuiBox)`
    width: 900px;
    height: 500px;
`;

export const DogCard = MyDogCard;
