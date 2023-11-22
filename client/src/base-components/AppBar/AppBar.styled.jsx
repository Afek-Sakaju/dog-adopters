import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box';

export const MuiAppBar = styled(AppBar)``;

export const Typography = styled(MuiTypography)`
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
