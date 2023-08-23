import React, { useMemo, useState } from 'react';

import { AuthProxy } from '@proxies';
import { RegisterForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Register.styled';

export default function Register() {
    const [responseState, setResponseState] = useState(0);

    const handleSubmit = async (data, onSuccess) => {
        await AuthProxy.registerUser({ userData: data })
            .then(() => setResponseState(1))
            .then(() => onSuccess())
            .catch((e) => {
                setResponseState(-1);
                console.error(e);
            });
    };

    // Todo: change alert to be object instead of number
    const alert = useMemo(() => {
        switch (responseState) {
            case 1:
                return (
                    <Alert severity="success" variant="filled">
                        Registered successfully
                    </Alert>
                );
            case -1:
                return (
                    <Alert severity="error" variant="filled">
                        Registration failed, try another username.
                    </Alert>
                );
            default:
                return null;
        }
    }, [responseState]);

    return (
        <PageContainer>
            <RegisterForm onSubmit={handleSubmit} />
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
