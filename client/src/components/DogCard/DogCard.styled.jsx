import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiFemaleIcon from '@mui/icons-material/FemaleRounded';
import MuiMaleIcon from '@mui/icons-material/MaleRounded';
import { FaShieldDog } from 'react-icons/fa6';
import { TbVaccine } from 'react-icons/tb';

import { Card as MyCard } from '@base-components';

export const Card = MyCard;

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
    padding: 3px;
    color: #388e3c;
`;

export const VaccinatedIcon = styled(TbVaccine)`
    width: 20px;
    height: 20px;
    padding: 3px;
    color: #388e3c;
`;

export const MaleIcon = styled(MuiMaleIcon)`
    position: absolute;
    right: 3%;
    top: 6%;
    width: 22px;
    height: 22px;
    padding: 3px;
    color: #2986cc;
`;

export const FemaleIcon = styled(MuiFemaleIcon)`
    position: absolute;
    right: 2%;
    top: 5%;
    width: 24px;
    height: 24px;
    padding: 3px;
    color: #c90076;
`;

export const MainInformationText = styled(MuiTypography)`
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
`;

export const LabeledIconBox = styled(MuiBox)`
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: #388e3c;
`;

export const InlineTextWrapper = styled(MuiBox)`
    display: flex;
    justify-content: space-between;
`;
