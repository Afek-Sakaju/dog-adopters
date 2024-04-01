import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';

import storeConfig from '@store';
import App from './App';
import './index.scss';

const theme = createTheme({
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeConfig()}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);
