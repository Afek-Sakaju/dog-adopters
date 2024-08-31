import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Paper as MuiPaper,
    Typography as MuiTypography,
} from '@mui/material';
import { GiDogHouse as DogHouseIcon } from 'react-icons/gi';

import { Loader as MyLoader } from '@/base-components';
import { MAIN_COLORS, containerScrollbarStyles } from '@/utils';

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

    ${containerScrollbarStyles}
`;

export const DogListTitleContainer = styled(MuiBox)`
    min-height: 27px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 9px 0;
    background-color: ${MAIN_COLORS.bgAltColor};
`;

export const DogListTitle = styled(MuiTypography)`
    margin: 0;
    font-size: 1.15rem;
    font-weight: 500;
    color: ${MAIN_COLORS.secondary};
`;

export const DogCard = MyDogCard;

export const Loader = MyLoader;

export const KennelIcon = styled(DogHouseIcon)`
    width: 200px;
    height: 200px;
    margin-top: 80px;
    color: ${MAIN_COLORS.secondary};
`;
