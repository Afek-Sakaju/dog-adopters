import React, { type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { APP_PATHS } from '@/utils';
import { AuthProxy } from '@/proxies';
import { AuthPage, RegisterForm } from './RegisterPage.styled';
import { UserAuthCb } from '@/types';

export default function RegisterPage(): ReactNode {
    const { t } = useTranslation();

    const authCb: UserAuthCb = AuthProxy.registerUser.bind(AuthProxy);

    return (
        <AuthPage
            afterAuthRedirectPath={APP_PATHS.LOGIN}
            // eslint-disable-next-line react/jsx-no-bind
            authCb={authCb}
            authFormComponent={<RegisterForm />}
            failedOperationMessage={t('alert.user.register.failure')}
            loaderText={t('components.loader.register_success')}
            successfulOperationMessage={t('alert.user.register.success')}
        />
    );
}
