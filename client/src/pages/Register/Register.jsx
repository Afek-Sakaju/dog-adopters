import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_PATHS, FORM_SUBMIT_REDIRECT_DELAY } from '@utils';
import { AuthProxy } from '@proxies';
import { useTranslation } from '@src/i18n';
import {
    Alert,
    Loader,
    PageContainer,
    RegisterForm,
    Snackbar,
} from './Register.styled';

export default function Register() {
    const [responseState, setResponseState] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);

    const { t } = useTranslation('register-page');

    const navigate = useNavigate();
    const navigateToLoginPage = () => {
        setTimeout(() => navigate(APP_PATHS.LOGIN), FORM_SUBMIT_REDIRECT_DELAY);
    };

    const handleSubmit = async (data, onSuccess) => {
        await AuthProxy.registerUser({ userData: data })
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: t('alert.success-register'),
                });
                onSuccess();
            })
            .then(() => {
                setIsRegistered(true);
                navigateToLoginPage();
            })
            .catch((e) => {
                setResponseState({
                    isSuccess: false,
                    message: t('alert.failed-register'),
                });
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
            {isRegistered ? (
                <Loader
                    BgColor="#ffffffeb"
                    title={t('loader.success-register')}
                />
            ) : (
                <RegisterForm t={t} onSubmit={handleSubmit} />
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
