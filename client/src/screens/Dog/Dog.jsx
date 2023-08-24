/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserReselectSelector } from '@store';
import { DogProxy } from '@proxies';
import { PAGES_RESPONSES } from '@utils';
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
    // 0: Not deleted/deleting | -1: Deletion under process | 1: Dog has been deleted
    const [dogDeletionStatus, setDogDeletionStatus] = useState(0);

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
                    message: PAGES_RESPONSES.dog[formType].success,
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
                    message: PAGES_RESPONSES.dog[formType].failure,
                });
                if (isNew) setIsLoading(false);
            });
    };

    const handleDelete = async () => {
        setDogDeletionStatus(-1);
        setIsLoading(true);

        await DogProxy.deleteDog({ id: dogId })
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_RESPONSES.dog.delete.success,
                });
                setDogData(null);
                setDogDeletionStatus(1);
            })
            .catch((e) => {
                console.error(e);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_RESPONSES.dog.delete.failure,
                });
                setDogData(null);
                setDogDeletionStatus(0);
            });
    };

    useEffect(() => {
        if (isNew && !dogData) setIsLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dogData]);

    useEffect(() => {
        /* Sometimes when you navigate from edit dog to create dog, the data of the previous dog remains 
				in the create dog, this useEffect hook will fix this */

        const isNewWithResponseMessage =
            isNew && (dogDeletionStatus === 1 || errorFetchingDogFromDb);

        const isNewWithDogData = isNew && dogData;
        if (isNewWithDogData) {
            setIsLoading(true);
            setDogData(null);
        } else if (isNewWithResponseMessage) {
            setErrorFetchingDogFromDb(false);
            setDogDeletionStatus(0);
            setIsLoading(false);
        }

        if (!isNew && !dogData) setIsLoading(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNew]);

    useEffect(() => {
        async function fetchDogData(id) {
            setIsLoading(true);

            const data = await DogProxy.getDogByID({ id })
                .then((d) => {
                    if (!d) throw Error(PAGES_RESPONSES.dog.get.failure);
                    setIsLoading(false);
                    return d;
                })
                .catch((e) => {
                    if (dogDeletionStatus === 1) {
                        setResponseState({
                            isSuccess: true,
                            message: PAGES_RESPONSES.dog.delete.success,
                        });
                    } else {
                        setResponseState({
                            isSuccess: false,
                            message: PAGES_RESPONSES.dog.get.failure,
                        });
                        setErrorFetchingDogFromDb(true);
                        console.error(e);
                    }
                })
                .finally(() => setIsLoading(false));

            setDogData(data);
        }

        if (
            !isNew &&
            isLoading &&
            !errorFetchingDogFromDb &&
            !dogDeletionStatus
        ) {
            fetchDogData(dogId);
        }

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

    const ProcessStatusComponent = useMemo(() => {
        switch (true) {
            case errorFetchingDogFromDb:
                return <Title>Can't fetch this dog's data</Title>;
            case dogDeletionStatus === 1:
                return <Title>This dog has been deleted</Title>;
            case isLoading:
                return (
                    <>
                        <Title>Please wait...</Title>
                        <Loader />
                    </>
                );
            default:
                return null;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, errorFetchingDogFromDb, dogDeletionStatus]);

    return (
        <PageContainer>
            {ProcessStatusComponent ? (
                <LoaderWrapper>{ProcessStatusComponent}</LoaderWrapper>
            ) : (
                <DogForm
                    dogData={dogData}
                    formType={formType}
                    handleDelete={handleDelete}
                    isNew={isNew}
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
