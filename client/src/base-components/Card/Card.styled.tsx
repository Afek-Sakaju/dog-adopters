import { styled } from '@mui/material/styles';
import {
    Card,
    CardActionArea as MuiCardActionArea,
    CardContent as MuiCardContent,
    CardMedia as MuiCardMedia,
    Typography as MuiTypography,
    Zoom as MuiZoom,
} from '@mui/material';

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
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2px 3px;
    background-color: white;
    border: 1px solid #00000013;
`;

export const TitleTypography = styled(MuiTypography)`
    font-size: 1.2em;
    margin: 0;
`;

export const Zoom = styled(MuiZoom)``;
