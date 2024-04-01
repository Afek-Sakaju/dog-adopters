import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiFemaleIcon from '@mui/icons-material/FemaleRounded';
import MuiMaleIcon from '@mui/icons-material/MaleRounded';
import { FaShieldDog } from 'react-icons/fa6';
import { TbVaccine } from 'react-icons/tb';

import { Card as MyCard, Icon as MyIcon } from '@base-components';

export const Card = MyCard;

export const Icon = MyIcon;

export const Text = styled(MuiTypography, {
    shouldForwardProp: (prop) => prop !== 'isBoldText',
})(({ isBoldText }) => ({
    ...(isBoldText && { fontWeight: 'bold' }),
    margin: 0,
    fontSize: '1em',
}));

export const InlineTextContainer = styled(MuiBox)`
    display: flex;
    white-space: pre;
`;

export const DesexedIcon = styled(FaShieldDog)`
    width: 20px;
    height: 20px;
    color: #388e3c;
`;

export const VaccinatedIcon = styled(TbVaccine)`
    width: 20px;
    height: 20px;
    color: #388e3c;
`;

export const MaleIcon = styled(MuiMaleIcon)`
    height: 22px;
    color: #2986cc;
`;

export const FemaleIcon = styled(MuiFemaleIcon)`
    height: 24px;
    color: #c90076;
`;

export const MainInformationText = styled(MuiTypography)`
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
`;

export const IconsContainer = styled(MuiBox)`
    position: absolute;
    right: -9px;
    top: 8px;
    display: flex;
    align-items: center;
`;
