import { createTheme } from '@mui/material';

export const MAIN_COLORS = {
    primary: '#F1AB61',
    primaryLight: '#ffdda6a6',
    secondary: '#b1a195',
    bgColor: 'white',
    bgAltColor: '#f2f2f2',
    error: '#d32f2f',
    textSecondary: '#735A47',
    textSecondaryLight: '#FEE9C5',
    male: '#2986cc',
    female: '#c90076',
    safe: '#388e3c',
    feature: '#f09298',
} as const;

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 445,
            sm: 660,
            md: 920,
            lg: 1200,
            xl: 1350,
        },
    },
    palette: {
        primary: { main: MAIN_COLORS.primary },
        secondary: { main: MAIN_COLORS.secondary },
    },
});
