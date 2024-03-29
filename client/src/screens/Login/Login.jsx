/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { AuthProxy } from '@proxies';
import { initUserAction } from '@store';
import { LoginForm } from '@components';
import { PAGES_RESPONSES } from '@utils';
import { Alert, PageContainer, Snackbar } from './Login.styled';

function Login({ onLogin }) {
    const [responseState, setResponseState] = useState(null);

    const handleSubmit = async (data, onSuccess) => {
        await AuthProxy.loginUser({ userData: data })

            .then((userDataResponse) => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_RESPONSES.user.login.success,
                });
                onSuccess();
                onLogin(userDataResponse);
            })
            .catch((e) => {
                setResponseState({
                    isSuccess: false,
                    message: PAGES_RESPONSES.user.login.failure,
                });
                data.password = '';
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
            <LoginForm onSubmit={handleSubmit} />
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

const mapDispatchToProps = (dispatch) => ({
    onLogin: (user) => {
        dispatch(initUserAction({ user }));
    },
});

export default connect(null, mapDispatchToProps)(Login);
