import React, { useMemo, useState } from 'react';

import { DogForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Dog.styled';

export default function CreateDog() {
    const [dogData, setDogData] = useState(null);
    const [responseState, setResponseState] = useState(0);

    const alert = useMemo(() => {
        switch (responseState) {
            case 1:
                return (
                    <Alert severity="success" variant="filled">
                        Dog's data created successfully
                    </Alert>
                );
            case -1:
                return (
                    <Alert severity="error" variant="filled">
                        Dog's data creation failed
                    </Alert>
                );
            default:
                return null;
        }
    }, [responseState]);

    return (
        <PageContainer>
            <DogForm
                onSubmit={(data) => setDogData(data)}
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
