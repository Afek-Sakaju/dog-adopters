import React, { type ReactNode } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import type { User, UserAuthCb } from '@/types';
import { AuthProxy } from '@/proxies';
import { initUserAction } from '@/store';
import { APP_PATHS } from '@/utils';
import { AuthPage, LoginForm } from './LoginPage.styled';

interface LoginPageProps {
    onLogin: (userData: User) => void;
}

function LoginPage({ onLogin }: LoginPageProps): ReactNode {
    const { t } = useTranslation();

    const authCb: UserAuthCb = AuthProxy.loginUser.bind(AuthProxy);

    return (
        <AuthPage
            afterAuthRedirectPath={APP_PATHS.dogsList}
            // eslint-disable-next-line react/jsx-no-bind
            authCb={authCb}
            authFormComponent={<LoginForm />}
            failedOperationMessage={t('alert.user.login.failure')}
            successfulOperationMessage={t('alert.user.login.success')}
            onAuthSuccess={onLogin}
        />
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogin: (user: User) => {
        dispatch(initUserAction({ user }));
    },
});

export default connect(null, mapDispatchToProps)(LoginPage);
