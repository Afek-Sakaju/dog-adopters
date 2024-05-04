import { styled } from '@mui/material/styles';
import { Box as MuiBox, Typography as MuiTypography } from '@mui/material';
import {
    FemaleRounded as MuiFemaleIcon,
    MaleRounded as MuiMaleIcon,
} from '@mui/icons-material';
import { FaShieldDog as DogShieldIcon } from 'react-icons/fa6';
import { TbVaccine as VaccineIcon } from 'react-icons/tb';

import { Card as MyCard, Icon as MyIcon } from '@/base-components';
import { MAIN_COLORS } from '@/utils';

export const Card = MyCard;

export const DogDataContentWrapper = styled(MuiBox)`
    padding-left: 3.7px;
`;

export const Icon = MyIcon;

export const DogName = styled(MuiTypography)`
    margin: 0;
    font-size: 1.1em;
    font-weight: 600;
`;

export const Text = styled(MuiTypography)`
    margin: 0;
    font-size: 0.9em;
    font-weight: 600;
`;

export const IconsContainer = styled(MuiBox)`
    position: absolute;
    right: 0px;
    top: 8px;
    display: flex;
    align-items: center;
`;

export const DesexedIcon = styled(DogShieldIcon)`
    width: 15px;
    height: 15px;
    color: ${MAIN_COLORS.safe};
`;

export const VaccinatedIcon = styled(VaccineIcon)`
    width: 15px;
    height: 15px;
    color: ${MAIN_COLORS.safe};
`;

export const MaleIcon = styled(MuiMaleIcon)`
    height: 17px;
    color: ${MAIN_COLORS.male};
`;

export const FemaleIcon = styled(MuiFemaleIcon)`
    height: 19px;
    color: ${MAIN_COLORS.female};
`;
