import AppBar from '@mui/material/AppBar';
import MuiBox from '@mui/material/Box';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import type { MuiStyledCmpThemeProp } from '@/types';

export const MuiAppBar = styled(AppBar)`
    user-select: none;
`;

export const Title = styled(MuiTypography)(
    ({ theme }: MuiStyledCmpThemeProp) => ({
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
    })
);

export const Box = styled(MuiBox)(({ theme }: MuiStyledCmpThemeProp) => ({
    width: 'max-content',
    display: 'flex',
    alignItems: '4px 0',
    margin: '0 5px',
    gap: '15px',

    [theme.breakpoints.down('lg')]: {
        gap: '10px',
    },

    [theme.breakpoints.down('xs')]: {
        gap: '7px',
    },
}));

export const Toolbar = styled(MuiToolbar)(
    ({ theme }: MuiStyledCmpThemeProp) => ({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 15px !important',

        [theme.breakpoints.down('lg')]: {
            padding: '0 5px !important',
        },

        [theme.breakpoints.down('xs')]: {
            padding: '0 !important',
        },
    })
);
