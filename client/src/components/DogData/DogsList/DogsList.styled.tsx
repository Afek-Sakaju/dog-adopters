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

export const DogsListContainer = styled(MuiPaper)(({ theme }) => `
    width: 100%;
    width: 945px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    ${theme.breakpoints.down('xl')} {
        width: 710px;
    }

    ${theme.breakpoints.down('lg')} {
        width: 680px;
    }

    ${theme.breakpoints.down('md')} {
        width: 445px;
    }

    ${theme.breakpoints.down('xs')} {
        width: 220px;
    }
`)

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

export const DogListTitle = styled(MuiTypography)(({ theme }) => `
    margin: 0;
    font-size: 1.15rem;
    font-weight: 500;
    color: ${MAIN_COLORS.secondary};

    ${theme.breakpoints.down('xl')} {
        font-size: 1rem;
    }

    ${theme.breakpoints.down('xs')} {
        font-size: 0.85rem;
    }
`);

export const DogCard = MyDogCard;

export const Loader = MyLoader;

export const KennelIcon = styled(DogHouseIcon)`
    width: 200px;
    height: 200px;
    margin-top: 80px;
    color: ${MAIN_COLORS.secondary};
`;
