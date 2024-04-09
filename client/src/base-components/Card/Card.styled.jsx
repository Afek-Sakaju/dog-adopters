import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiCardActionArea from '@mui/material/CardActionArea';
import MuiTypography from '@mui/material/Typography';
import MuiZoom from '@mui/material/Zoom';

export const MuiCard = styled(Card)`
    min-height: 60px;
    min-width: 60px;
    max-height: 330px;
    height: max-content;
    background-color: #f2f2f2;
`;

export const CardContent = styled(MuiCardContent)`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 0;
`;

export const CardMedia = styled(MuiCardMedia)`
    height: 200px;
    width: 200px;
`;

export const CardActionArea = styled(MuiCardActionArea)`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fafafa;
`;

export const TitleTypography = styled(MuiTypography)`
    font-size: 1.2em;
    margin: 0;
`;

export const Zoom = styled(MuiZoom)``;
