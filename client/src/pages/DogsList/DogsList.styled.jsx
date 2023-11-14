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
    background-size: 50px 50px;
    background-image: url('/hearts-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Title = styled(MuiTypography)`
    position: absolute;
    top: 20px;
    color: #e91d25;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
`;

export const Loader = styled(LinearProgress)`
    width: 100%;
`;
