import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DogProxy } from '@proxies';
import { DOG_PAGE_RESPONSES } from '@utils';
import { DogForm } from '@components';
import {
    Alert,
    Snackbar,
    PageContainer,
    Loader,
    Title,
    LoaderWrapper,
} from './Dog.styled';

export default function CreateDog() {
    const [dogData, setDogData] = useState(null);
    const [responseState, setResponseState] = useState(0);

    const { dogId } = useParams();
    const isNew = dogId === 'new';

    console.log(dogData);
    useEffect(() => {
        async function fetchDogData(id) {
            const data = await DogProxy.getDogByID({ id })
                .then((d) => d)
                .catch((e) => console.error(e));
            setDogData(data);
        }

        if (!isNew) fetchDogData(dogId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const alert = useMemo(() => {
        switch (responseState) {
            case 1:
                return (
                    <Alert severity="success" variant="filled">
                        {DOG_PAGE_RESPONSES[isNew ? 'create' : 'edit'].success}
                    </Alert>
                );
            case -1:
                return (
                    <Alert severity="error" variant="filled">
                        {DOG_PAGE_RESPONSES[isNew ? 'create' : 'edit'].failed}
                    </Alert>
                );
            default:
                return null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return (
        <PageContainer>
            {!isNew && !dogData ? (
                <LoaderWrapper>
                    <Title>Loading dog's data</Title>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <DogForm
                    onSubmit={(data) => setDogData(data)}
                    setResponseState={setResponseState}
                    formType={isNew}
                    dogData={dogData}
                />
            )}
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
