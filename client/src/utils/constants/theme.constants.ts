import { createTheme } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
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
        primary: {
            main: '#F1AB61',
        },
    },
});
