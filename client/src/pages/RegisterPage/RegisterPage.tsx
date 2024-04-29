import React, { type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { APP_PATHS } from '@/utils';
import { AuthProxy } from '@/proxies';
import { AuthPage, RegisterForm } from './RegisterPage.styled';

export default function RegisterPage(): ReactNode {
    const { t } = useTranslation();

    return (
        <AuthPage
            afterAuthRedirectPath={APP_PATHS.LOGIN}
            authCb={AuthProxy.registerUser}
            authFormComponent={<RegisterForm />}
            failedOperationMessage={t('alert.user.register.failure')}
            loaderText={t('components.loader.register_success')}
            successfulOperationMessage={t('alert.user.register.success')}
        />
    );
}
