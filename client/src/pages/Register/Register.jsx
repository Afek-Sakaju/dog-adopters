import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_PATHS, FORM_SUBMIT_REDIRECT_DELAY, PAGES_RESPONSES } from '@utils';
import { AuthProxy } from '@proxies';
import { RegisterForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Register.styled';

export default function Register() {
    const [responseState, setResponseState] = useState(null);

    const navigate = useNavigate();
    const navigateToLoginPage = () => {
        setTimeout(() => navigate(APP_PATHS.LOGIN), FORM_SUBMIT_REDIRECT_DELAY);
    };

    const handleSubmit = async (data, onSuccess) => {
        await AuthProxy.registerUser({ userData: data })
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_RESPONSES.USER_PAGE.REGISTER.success,
                });
                onSuccess();
            })
            .then(() => navigateToLoginPage())
            .catch((e) => {
                setResponseState({
                    isSuccess: false,
                    message: PAGES_RESPONSES.USER_PAGE.REGISTER.failure,
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
            <RegisterForm onSubmit={handleSubmit} />
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
