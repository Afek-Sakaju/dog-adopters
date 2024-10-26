import { styled } from '@mui/material/styles';
import { AppBar, Box as MuiBox, Toolbar as MuiToolbar } from '@mui/material';

export const MuiAppBar = AppBar;

export const Box = styled(MuiBox)`
    width: max-content;
    display: flex;
    align-items: center;
    margin: 0 5px;
    gap: 17px;

    ${({ theme }) => theme.breakpoints.down('lg')} {
        gap: 10px;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
        gap: 7px;
    }
`;

export const Toolbar = styled(MuiToolbar)`
    display: flex;
    justify-content: space-between;
    padding: 0 15px !important;

    ${({ theme }) => theme.breakpoints.down('lg')} {
        padding: 0 5px !important;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
        padding: 0 !important;
    }
`;
