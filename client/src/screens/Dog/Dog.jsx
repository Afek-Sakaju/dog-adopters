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
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { dogId } = useParams();
    const isNew = dogId === 'new';
    const formType = isNew ? 'create' : 'edit';

    const handleSubmit = async (data) => {
        setIsLoading(true);

        await DogProxy[isNew ? 'createDog' : 'updateDog']({ data })
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: DOG_PAGE_RESPONSES[formType].success,
                });
                setDogData(data);
            })
            .catch((e) => {
                console.error(e);
                setDogData(null);
                setResponseState({
                    isSuccess: false,
                    message: DOG_PAGE_RESPONSES[formType].failure,
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (isNew && !dogData) {
            setIsLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dogData]);

    useEffect(() => {
        async function fetchDogData(id) {
            setIsLoading(true);

            const data = await DogProxy.getDogByID({ id })
                .then((d) => d)
                .catch((e) => {
                    setResponseState({
                        isSuccess: false,
                        message: DOG_PAGE_RESPONSES.get.failure,
                    });
                    console.error(e);
                })
                .finally(() => setIsLoading(false));

            setDogData(data);
        }

        if (!isNew) fetchDogData(dogId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const alert = useMemo(() => {
        switch (responseState?.isSuccess) {
            case true:
                return (
                    <Alert severity="success" variant="filled">
                        {responseState.message}
                    </Alert>
                );
            case false:
                return (
                    <Alert severity="error" variant="filled">
                        {responseState.message}
                    </Alert>
                );
            default:
                return null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return (
        <PageContainer>
            {isLoading ? (
                <LoaderWrapper>
                    <Title>Loading dog's data</Title>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <DogForm
                    formType={formType}
                    dogData={dogData}
                    onSubmit={handleSubmit}
                />
            )}
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
