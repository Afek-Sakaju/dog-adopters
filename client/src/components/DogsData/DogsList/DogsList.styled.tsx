import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Paper as MuiPaper,
    Typography as MuiTypography,
} from '@mui/material';
import { GiDogHouse as DogHouseIcon } from 'react-icons/gi';

import { Loader as MyLoader } from '@/base-components';
import MyDogCard from '../DogCard/DogCard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DogsListContainer = styled(MuiPaper)(({ theme }) => ({
    width: '910px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25px',
}));

export const DogsListInnerContainer = styled(MuiBox)`
    width: 100%;
    height: 606px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    overflow-y: auto;

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

export const Loader = styled(MyLoader)`
    color: #1976d2;
`;

export const KennelIcon = styled(DogHouseIcon)`
    width: 200px;
    height: 200px;
    color: #2986cc;
`;
