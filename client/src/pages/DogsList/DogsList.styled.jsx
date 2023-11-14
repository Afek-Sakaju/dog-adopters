import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import MuiTypography from '@mui/material/Typography';

export const PageContainer = styled('div')`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: lightgray;
    user-select: none;
`;

export const Title = styled(MuiTypography)`
    font-size: 3em;
    font-weight: bold;
`;

export const Loader = styled(LinearProgress)`
    width: 100%;
`;
