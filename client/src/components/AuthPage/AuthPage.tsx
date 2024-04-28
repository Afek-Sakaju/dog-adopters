import type { ReactElement, ReactNode } from 'react';
import React, { cloneElement, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { type NavigateFunction, useNavigate } from 'react-router-dom';

import type { MuiColor, User } from '@/types';
import { AuthProxy } from '@/proxies';
import { initUserAction } from '@/store';
import {
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    IMAGES_SRC,
} from '@/utils';
import {
    AdoptionImage,
    Alert,
    AppLogo,
    Loader,
    FormContentWrapper,
    PageContainer,
    SideContentWrapper,
    Snackbar,
    WebsiteDescription,
    WebsiteDescriptionContainer,
} from './AuthPage.styled';

interface AuthPageProps {
    afterAuthRedirectPath?: string;
    authFormComponent?: ReactElement;
    failedOperationMessage?: string;
    loaderText?: string;
    onAuthSuccess?: (userData: User) => void;
    successfulOperationMessage?: string;
}

function AuthPage({
    afterAuthRedirectPath,
    authFormComponent,
    failedOperationMessage,
    loaderText,
    onAuthSuccess,
    successfulOperationMessage,
}: AuthPageProps): ReactNode {
    const [responseState, setResponseState] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const navigate: NavigateFunction = useNavigate();
    const navigateAfterAuthSuccess = (): void => {
        setTimeout(
            () => navigate(afterAuthRedirectPath),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };

    const handleSubmit = async (data: User, onSuccess: () => void) => {
        await AuthProxy.loginUser({ userData: data })
            .then((userDataResponse: User) => {
                setResponseState({
                    isSuccess: true,
                    message: successfulOperationMessage,
                });
                onSuccess();

                onAuthSuccess(userDataResponse);
            })
            .then(() => {
                setIsRedirecting(true);
                navigateAfterAuthSuccess();
            })
            .catch((e) => {
                setResponseState({
                    isSuccess: false,
                    message: failedOperationMessage,
                });
                data.password = '';
                console.error(e);
            });
    };

    const alert: ReactNode = useMemo(() => {
        if (responseState?.isSuccess === undefined) return null;

        const severity: MuiColor = responseState.isSuccess
            ? 'success'
            : 'error';
        return (
            <Alert severity={severity} variant="filled">
                {responseState?.message}
            </Alert>
        );
    }, [responseState]);

    const formComponent: ReactElement = cloneElement(authFormComponent, {
        handleSubmit,
    });
    return (
        <PageContainer>
            {isRedirecting ? (
                <Loader BgColor="#ffffffeb" title={loaderText} />
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
                    <FormContentWrapper>{formComponent}</FormContentWrapper>
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
    onAuthSuccess: (user: User) => {
        dispatch(initUserAction({ user }));
    },
});

export default connect(null, mapDispatchToProps)(AuthPage);
