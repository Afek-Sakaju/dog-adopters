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
    max-height: 300px;
    max-width: 350px;
    height: max-content;
    width: max-content;
    background-color: #f2f2f2;
`;

export const CardContent = styled(MuiCardContent)`
    flex: 2 1 auto;
    min-width: 90%;
    padding: 10px 20px;
`;

export const CardMedia = styled(MuiCardMedia)`
    flex: 1 1 auto;
    object-fit: cover;
    width: 100%;
    max-height: 180px;
`;

export const CardActionArea = styled(MuiCardActionArea)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const TitleTypography = styled(MuiTypography)`
    font-size: 1.3em;
    margin: 0;
`;

export const Zoom = styled(MuiZoom)``;
