import { styled } from '@mui/material/styles';
import {
    AppBar,
    Box as MuiBox,
    Toolbar as MuiToolbar,
    Typography as MuiTypography,
} from '@mui/material';

export const MuiAppBar = AppBar;

export const Title = styled(MuiTypography)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    top: '50%',
    textAlign: 'center',
    color: 'black',
    fontSize: '2.5em',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '2px',
    transform: 'translate(-50%, -50%)',

    [theme.breakpoints.down('xl')]: {
        fontSize: '2em',
    },

    [theme.breakpoints.down('lg')]: {
        fontSize: '1.6em',
    },

    [theme.breakpoints.down('md')]: {
        position: 'static',
        margin: '0 10px',
        fontSize: '1.4em',
        transform: 'unset',
    },

    [theme.breakpoints.down('sm')]: {
        display: 'none',
        visibility: 'hidden',
    },
}));

export const Box = styled(MuiBox)(({ theme }) => ({
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    margin: '0 5px',
    gap: '17px',

    [theme.breakpoints.down('lg')]: {
        gap: '10px',
    },

    [theme.breakpoints.down('xs')]: {
        gap: '7px',
    },
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px !important',

    [theme.breakpoints.down('lg')]: {
        padding: '0 5px !important',
    },

    [theme.breakpoints.down('xs')]: {
        padding: '0 !important',
    },
}));
