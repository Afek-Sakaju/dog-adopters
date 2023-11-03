import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import MuiTypography from '@mui/material/Typography';

export const PageContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: lightgray;
`;

export const Title = styled(MuiTypography)`
    font-size: 3em;
    font-weight: bold;
`;

export const Loader = styled(LinearProgress)`
    width: 100%;
`;