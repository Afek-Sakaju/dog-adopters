import React, { type ReactNode } from 'react';

import { APP_PATHS, COMPONENTS_CONTENT, PAGES_ALERT_RESPONSES } from '@/utils';
import { AuthProxy } from '@/proxies';
import { AuthPage, RegisterForm } from './RegisterPage.styled';

export default function RegisterPage(): ReactNode {
    return (
        <AuthPage
            afterAuthRedirectPath={APP_PATHS.LOGIN}
            authCb={AuthProxy.registerUser}
            authFormComponent={<RegisterForm />}
            failedOperationMessage={
                PAGES_ALERT_RESPONSES.USER_PAGE.REGISTER.failure
            }
            loaderText={COMPONENTS_CONTENT.LOADER.REGISTER_SUCCESS}
            successfulOperationMessage={
                PAGES_ALERT_RESPONSES.USER_PAGE.REGISTER.success
            }
        />
    );
}
