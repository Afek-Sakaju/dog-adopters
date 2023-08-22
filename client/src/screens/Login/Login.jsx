/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { initUserAction } from '@store';
import { LoginForm } from '@components';
import { Alert, PageContainer, Snackbar } from './Login.styled';

function Login({ onLogin }) {
    const [userData, setUserData] = useState(null);
    const [responseState, setResponseState] = useState(0);

    useEffect(() => {
        if (responseState === 1 && userData) onLogin(userData);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

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
            <LoginForm
                onSubmit={(data) => setUserData(data)}
                setResponseState={setResponseState}
            />
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

export default connect(mapDispatchToProps)(Login);
