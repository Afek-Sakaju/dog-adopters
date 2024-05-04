import type { ReactElement, ReactNode } from 'react';
import React, { cloneElement, useMemo, useState } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { MuiColor, User, UserAuthCb } from '@/types';
import { FORM_SUBMIT_REDIRECT_DELAY, IMAGES_SRC } from '@/utils';
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
    authCb?: UserAuthCb;
    failedOperationMessage?: string;
    loaderText?: string;
    onAuthSuccess?: (userData: User) => void;
    successfulOperationMessage?: string;
}

export default function AuthPage({
    afterAuthRedirectPath,
    authFormComponent,
    authCb,
    failedOperationMessage,
    loaderText,
    onAuthSuccess,
    successfulOperationMessage,
}: AuthPageProps): ReactNode {
    const [responseState, setResponseState] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const { t } = useTranslation();

    const navigate: NavigateFunction = useNavigate();
    const navigateAfterAuthSuccess = (): void => {
        setTimeout(
            () => navigate(afterAuthRedirectPath),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };

    const handleSubmit = async (data: User, onSuccess: () => void) => {
        await authCb({ userData: data })
            .then((userDataResponse: User) => {
                setResponseState({
                    isSuccess: true,
                    message: successfulOperationMessage,
                });
                onSuccess?.();

                onAuthSuccess?.(userDataResponse);
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
        onSubmit: handleSubmit,
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
                                {t('titles.website_description')}
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
