import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
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
    width: 20px;
    height: 20px;
    color: #388e3c;
`;

export const VaccinatedIcon = styled(TbVaccine)`
    padding: 3px;
    width: 20px;
    height: 20px;
    color: #388e3c;
`;

export const MainInfoText = styled(MuiTypography)`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
`;

export const LabeledIconBox = styled(MuiBox)`
    display: flex;
    align-items: center;
    color: #388e3c;
    margin-top: 8px;
`;

export const InlineTextWrapper = styled(MuiBox)`
    display: flex;
    justify-content: space-between;
`;
