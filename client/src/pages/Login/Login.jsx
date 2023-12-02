/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthProxy } from '@proxies';
import { initUserAction } from '@store';
import { APP_PATHS, FORM_SUBMIT_REDIRECT_DELAY } from '@utils';
import { useTranslation } from '@src/i18n';
import {
    Alert,
    Loader,
    LoginForm,
    PageContainer,
    Snackbar,
} from './Login.styled';

function Login({ onLogin }) {
    const [responseState, setResponseState] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const { t } = useTranslation('login-page');

    const navigate = useNavigate();
    const navigateToHomePage = () => {
        setTimeout(
            () => navigate(APP_PATHS.DOGS_DATA),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };

    const handleSubmit = async (data, onSuccess) => {
        await AuthProxy.loginUser({ userData: data })
            .then((userDataResponse) => {
                setResponseState({
                    isSuccess: true,
                    message: t('alert.success-login'),
                });
                onSuccess();

                onLogin(userDataResponse);
            })
            .then(() => {
                setIsRedirecting(true);
                navigateToHomePage();
            })
            .catch((e) => {
                setResponseState({
                    isSuccess: false,
                    message: t('alert.failed-login'),
                });
                data.password = '';
                console.error(e);
            });
    };

    const alert = useMemo(() => {
        if (responseState?.isSuccess === undefined) return null;

        const severity = responseState.isSuccess ? 'success' : 'error';
        return (
            <Alert severity={severity} variant="filled">
                {responseState?.message}
            </Alert>
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return (
        <PageContainer>
            {isRedirecting ? (
                <Loader BgColor="#ffffffeb" title={t('loader.success-login')} />
            ) : (
                <LoginForm t={t} onSubmit={handleSubmit} />
            )}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={() => setResponseState(null)}
                open={responseState !== null}
            >
                {alert}
            </Snackbar>
        </PageContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onLogin: (user) => {
        dispatch(initUserAction({ user }));
    },
});

export default connect(null, mapDispatchToProps)(Login);
