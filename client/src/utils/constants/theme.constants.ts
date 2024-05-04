import { createTheme } from '@mui/material';

export const MAIN_COLORS = {
    primary: '#F1AB61',
    primaryLight: '#ffdda6a6',
    secondary: '#b1a195',
} as const;

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 350,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1350,
            // @ts-expect-error - mui breakpoints types error, will be fixed later
            xxl: 1800,
        },
    },
    palette: {
        primary: { main: MAIN_COLORS.primary },
        secondary: { main: MAIN_COLORS.secondary },
    },
});
