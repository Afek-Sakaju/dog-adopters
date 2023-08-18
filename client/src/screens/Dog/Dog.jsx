import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DogProxy } from '@proxies';
import { DOG_PAGE_RESPONSES } from '@utils';
import { DogForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Dog.styled';

export default function CreateDog() {
    const [dogData, setDogData] = useState(null);
    const [responseState, setResponseState] = useState(0);

    const { dogId } = useParams();
    const pageType = dogId === 'new' ? 'create' : 'edit';

    useEffect(() => {
        async function fetchDogData(id) {
            await DogProxy.getDogByID({ id })
                .then((data) => setDogData(data))
                .catch((e) => console.error(e));
        }
        fetchDogData(dogId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const alert = useMemo(() => {
        switch (responseState) {
            case 1:
                return (
                    <Alert severity="success" variant="filled">
                        {DOG_PAGE_RESPONSES[pageType].success}
                    </Alert>
                );
            case -1:
                return (
                    <Alert severity="error" variant="filled">
                        {DOG_PAGE_RESPONSES[pageType].failed}
                    </Alert>
                );
            default:
                return null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return (
        <PageContainer>
            <DogForm
                onSubmit={(data) => setDogData(data)}
                setResponseState={setResponseState}
                formType={pageType}
                dogData={dogData}
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
