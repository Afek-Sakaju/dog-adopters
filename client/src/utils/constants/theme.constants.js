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
            xxl: 1800,
        },
    },
});
