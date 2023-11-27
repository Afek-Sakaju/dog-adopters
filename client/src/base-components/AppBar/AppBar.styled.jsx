import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';

export const MuiAppBar = styled(AppBar)``;

export const Title = styled(MuiTypography)`
    position: absolute;
    left: 50%;
    top: 50%;
    color: black;
    font-size: 2.5em;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    transform: translate(-50%, -50%);
    user-select: none;
`;

export const Box = styled(MuiBox)`
    min-width: 200px;
    display: flex;
    align-items: center;
    margin: 0 5px;
    gap: 15px;
`;

export const Toolbar = styled(MuiToolbar)`
    display: flex;
    justify-content: space-between;
    padding: 0 15px !important;
`;
