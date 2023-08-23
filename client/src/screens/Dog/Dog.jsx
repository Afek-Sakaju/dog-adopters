/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserReselectSelector } from '@store';
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

function Dog({ user }) {
    const [dogData, setDogData] = useState(null);
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorFetchingDogFromDb, setErrorFetchingDogFromDb] = useState(false);

    const { dogId } = useParams();
    const isNew = dogId === 'new';
    const formType = isNew ? 'create' : 'edit';

    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        setIsLoading(true);

        const proxyMethod = isNew ? 'createDog' : 'updateDog';
        const requestParams = isNew
            ? { dogData: { ...data, owner: user?._id ?? null } }
            : { dogData: data, id: dogId };
        await DogProxy[proxyMethod](requestParams)
            .then((responseData) => {
                setResponseState({
                    isSuccess: true,
                    message: DOG_PAGE_RESPONSES[formType].success,
                });
                setDogData(data);
                setIsLoading(false);
                if (isNew) navigate(`/dogs/${responseData._id}`);
            })
            .catch((e) => {
                console.error(e);
                setDogData(null);
                setResponseState({
                    isSuccess: false,
                    message: DOG_PAGE_RESPONSES[formType].failure,
                });
                if (isNew) setIsLoading(false);
            });
    };

    useEffect(() => {
        if (isNew && !dogData) setIsLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dogData]);

    useEffect(() => {
        /* Sometimes when you navigate from edit dog to create dog, the data of the previous dog remains 
				in the create dog, this useEffect hook will fix this */
        const isNewWithDogData = isNew && dogData;
        if (isNewWithDogData) {
            setIsLoading(true);
            setDogData(null);
        }

        if (!isNew && !dogData) setIsLoading(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNew]);

    useEffect(() => {
        async function fetchDogData(id) {
            setIsLoading(true);

            const data = await DogProxy.getDogByID({ id })
                .then((d) => {
                    if (!d) throw Error(DOG_PAGE_RESPONSES.get.failure);
                    setIsLoading(false);
                    return d;
                })
                .catch((e) => {
                    setResponseState({
                        isSuccess: false,
                        message: DOG_PAGE_RESPONSES.get.failure,
                    });
                    setErrorFetchingDogFromDb(true);

                    console.error(e);
                })
                .finally(() => setIsLoading(false));

            setDogData(data);
        }

        if (!isNew && isLoading && !errorFetchingDogFromDb) fetchDogData(dogId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

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
            {isLoading || errorFetchingDogFromDb ? (
                <LoaderWrapper>
                    <Title>
                        {errorFetchingDogFromDb
                            ? "Can't fetch this dog's data"
                            : 'Please wait...'}
                    </Title>
                    {errorFetchingDogFromDb ? null : <Loader />}
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

const mapStateToProps = (state) => ({
    user: getUserReselectSelector(state),
});

export default connect(mapStateToProps)(Dog);
