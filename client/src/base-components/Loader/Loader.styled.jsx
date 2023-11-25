import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiLoader from '@mui/material/LinearProgress';
import MuiTypography from '@mui/material/Typography';

export const LoaderWrapper = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'color',
})(({ color }) => ({
    ...(color ? { color } : { color: '#1976d2' }),
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
}));

export const LoaderAnimation = styled(MuiLoader)`
    width: 100%;
    height: 10px;
    border-radius: 5px;
`;

export const LoaderTitle = styled(MuiTypography)`
    min-height: 60px;
    color: inherit;
    font-size: 2.5em;
    font-weight: bold;
`;
