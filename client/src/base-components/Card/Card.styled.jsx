import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiCardActionArea from '@mui/material/CardActionArea';
import MuiTypography from '@mui/material/Typography';
import MuiZoom from '@mui/material/Zoom';
import MuiBox from '@mui/material/Box';

export const MuiCard = styled(Card)`
    display: flex;
    height: 310px;
    width: 370px;
    margin: 0 20px;
    background-color: #f2f2f2;
`;

export const CardContent = styled(MuiCardContent)``;

export const CardMedia = styled(MuiCardMedia)`
    height: 150px;
    object-fit: contain;
`;

export const CardActionArea = styled(MuiCardActionArea)``;

export const TitleTypography = styled(MuiTypography)`
    font-size: 1.3em;
    margin: 0;
`;

export const Zoom = styled(MuiZoom)``;

export const Box = styled(MuiBox)`
    max-height: 63px;
    height: 63px;
    overflow-y: auto;
    margin-top: 20px;
`;
