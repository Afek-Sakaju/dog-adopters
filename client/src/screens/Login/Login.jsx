/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { AuthProxy } from '@proxies';
import { initUserAction } from '@store';
import { LoginForm } from '@components';
import { Alert, PageContainer, Snackbar } from './Login.styled';

function Login({ onLogin }) {
    const [responseState, setResponseState] = useState(0);

    const handleSubmit = async (data, onSuccess) => {
        await AuthProxy.loginUser({ userData: data })
            .then((userDataResponse) => {
                setResponseState(1);
                onSuccess();
                onLogin(userDataResponse);
            })
            .catch((e) => {
                setResponseState?.(-1);
                data.password = '';
                console.error(e);
            });
    };

    // Todo: change alert to be object instead of number
    const alert = useMemo(() => {
        switch (responseState) {
            case 1:
                return (
                    <Alert severity="success" variant="filled">
                        Logged in successfully
                    </Alert>
                );
            case -1:
                return (
                    <Alert severity="error" variant="filled">
                        Invalid username or password
                    </Alert>
                );
            default:
                return null;
        }
    }, [responseState]);

    return (
        <PageContainer>
            <LoginForm onSubmit={handleSubmit} />
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={() => setResponseState(0)}
                open={responseState !== 0}
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
