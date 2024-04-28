import type { ReactNode } from 'react';
import React, { useMemo, useState } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { type NavigateFunction, useNavigate } from 'react-router-dom';

import type { MuiColor, User } from '@/types';
import { AuthProxy } from '@/proxies';
import { initUserAction } from '@/store';
import {
    APP_PATHS,
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    IMAGES_SRC,
    PAGES_ALERT_RESPONSES,
} from '@/utils';
import {
    AdoptionImage,
    Alert,
    AppLogo,
    Loader,
    LoginForm,
    LoginFormContentWrapper,
    PageContainer,
    SideContentWrapper,
    Snackbar,
    WebsiteDescription,
    WebsiteDescriptionContainer,
} from './LoginPage.styled';

interface LoginPageProps {
    onLogin: (userData: User) => void;
}

function LoginPage({ onLogin }: LoginPageProps): ReactNode {
    const [responseState, setResponseState] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const navigate: NavigateFunction = useNavigate();
    const navigateToHomePage = (): void => {
        setTimeout(
            () => navigate(APP_PATHS.DOGS_DATA),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };

    const handleSubmit = async (data: User, onSuccess: () => void) => {
        await AuthProxy.loginUser({ userData: data })
            .then((userDataResponse: User) => {
                setResponseState({
                    isSuccess: true,
                    // @ts-ignore
                    message: PAGES_ALERT_RESPONSES.USER_PAGE.LOGIN.success,
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
                    // @ts-ignore
                    message: PAGES_ALERT_RESPONSES.USER_PAGE.LOGIN.failure,
                });
                data.password = '';
                console.error(e);
            });
    };

    const alert = useMemo(() => {
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
            {isRedirecting ? (
                <Loader
                    BgColor="#ffffffeb"
                    title={COMPONENTS_CONTENT.LOADER.LOGIN_SUCCESS}
                />
            ) : (
                <>
                    <SideContentWrapper>
                        <WebsiteDescriptionContainer>
                            <AppLogo
                                alt="/logo"
                                src={IMAGES_SRC.APP_LOGO_TRANSPARENT}
                            />
                            <WebsiteDescription>
                                {
                                    COMPONENTS_CONTENT.DOG_FORM
                                        .WEBSITE_DESCRIPTION
                                }
                            </WebsiteDescription>
                        </WebsiteDescriptionContainer>
                        <AdoptionImage />
                    </SideContentWrapper>
                    <LoginFormContentWrapper>
                        <LoginForm onSubmit={handleSubmit} elevation={0} />
                    </LoginFormContentWrapper>
                </>
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogin: (user: User) => {
        dispatch(initUserAction({ user }));
    },
});

export default connect(null, mapDispatchToProps)(LoginPage);
