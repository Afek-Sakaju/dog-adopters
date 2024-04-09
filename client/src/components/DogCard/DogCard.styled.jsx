import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiFemaleIcon from '@mui/icons-material/FemaleRounded';
import MuiMaleIcon from '@mui/icons-material/MaleRounded';
import { FaShieldDog } from 'react-icons/fa6';
import { TbVaccine } from 'react-icons/tb';

import { Card as MyCard, Icon as MyIcon } from '#base-components';

export const Card = MyCard;

export const Icon = MyIcon;

export const Text = styled(MuiTypography)`
    margin: 0;
    font-size: 0.9em;
    font-weight: 500;
`;

export const DesexedIcon = styled(FaShieldDog)`
    width: 15px;
    height: 15px;
    color: #388e3c;
`;

export const VaccinatedIcon = styled(TbVaccine)`
    width: 15px;
    height: 15px;
    color: #388e3c;
`;

export const MaleIcon = styled(MuiMaleIcon)`
    height: 17px;
    color: #2986cc;
`;

export const FemaleIcon = styled(MuiFemaleIcon)`
    height: 19px;
    color: #c90076;
`;

export const DogName = styled(MuiTypography)`
    margin: 0;
    font-size: 1.2em;
    font-weight: 500;
`;

export const IconsContainer = styled(MuiBox)`
    position: absolute;
    right: 0px;
    top: 8px;
    display: flex;
    align-items: center;
`;
