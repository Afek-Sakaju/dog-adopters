import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import { I18nextProvider } from 'react-i18next';

import storeConfig from '@store';
import i18n from './i18n';
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
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </I18nextProvider>
    </Provider>
);
