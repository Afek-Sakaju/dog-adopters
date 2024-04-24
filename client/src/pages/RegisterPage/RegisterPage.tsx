import React, { type ReactNode, useMemo, useState, ReactElement } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

import type { MuiColor, User } from '@/types';
import {
    APP_PATHS,
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    PAGES_ALERT_RESPONSES,
} from '@/utils';
import { AuthProxy } from '@/proxies';
import {
    Alert,
    Loader,
    PageContainer,
    RegisterForm,
    Snackbar,
} from './RegisterPage.styled';

export default function RegisterPage(): ReactNode {
    const [responseState, setResponseState] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);

    const navigate: NavigateFunction = useNavigate();
    const navigateToLoginPage = (): void => {
        setTimeout(() => navigate(APP_PATHS.LOGIN), FORM_SUBMIT_REDIRECT_DELAY);
    };

    const handleSubmit = async (data: User, onSuccess: VoidFunction) => {
        await AuthProxy.registerUser({ userData: data })
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    // @ts-ignore
                    message: PAGES_ALERT_RESPONSES.USER_PAGE.REGISTER.success,
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
                    // @ts-ignore
                    message: PAGES_ALERT_RESPONSES.USER_PAGE.REGISTER.failure,
                });
                console.error(e);
            });
    };

    const alert = useMemo((): ReactElement => {
        if (responseState?.isSuccess === undefined) return null;

        const severity: MuiColor = responseState.isSuccess
            ? 'success'
            : 'error';
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
                    title={COMPONENTS_CONTENT.LOADER.REGISTER_SUCCESS}
                />
            ) : (
                <RegisterForm onSubmit={handleSubmit} />
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
