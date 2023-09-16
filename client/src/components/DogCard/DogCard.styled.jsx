import { styled } from '@mui/material/styles';
import MuiTypography from '@mui/material/Typography';
import MuiZoom from '@mui/material/Zoom';
import { FaShieldDog } from 'react-icons/fa6';
import { TbVaccine } from 'react-icons/tb';

import { Card as MyCard } from '@base-components';

export const Card = MyCard;

export const Text = styled(MuiTypography)`
    font-size: 1em;
    margin: 0;
`;

export const DesexedIcon = styled(FaShieldDog)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: #388e3c;
`;

export const VaccinatedIcon = styled(TbVaccine)`
    padding: 3px;
    width: 25px;
    height: 25px;
    color: #388e3c;
`;

export const Zoom = styled(MuiZoom)``;
