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
} from './EditDog.styled';

// eslint-disable-next-line no-unused-vars
function EditDog({ user }) {
    const [dogData, setDogData] = useState(null);
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // 0: Not deleted/deleting | -1: Deletion under process | 1: Dog has been deleted

    const { dogId } = useParams();

    const navigate = useNavigate();
    const navigateToDogsList = () => {
        setTimeout(() => navigate(`/dogs`), 3000);
    };

    const handleSubmit = async (data) => {
        setIsLoading(true);

        const requestParams = { dogData: data, id: dogId };
        await DogProxy.updateDog(requestParams)
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_RESPONSES.DOG_PAGE.EDIT.success,
                });
                setDogData(data);

                navigateToDogsList();
            })
            .catch((e) => {
                console.error(e);
                setDogData(null);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_RESPONSES.DOG_PAGE.EDIT.failure,
                });
                setIsLoading(false);
            });
    };

    const handleDelete = async () => {
        setIsLoading(true);

        await DogProxy.deleteDog({ id: dogId })
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_RESPONSES.DOG_PAGE.DELETE.success,
                });
                setDogData(null);

                navigateToDogsList();
            })
            .catch((e) => {
                console.error(e);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_RESPONSES.DOG_PAGE.DELETE.failure,
                });
                setDogData(null);
                setIsLoading(false);
            });
    };

    async function fetchDogData(id) {
        setIsLoading(true);

        await DogProxy.getDogByID({ id })
            .then((data) => {
                if (!data) {
                    throw Error(PAGES_RESPONSES.DOG_PAGE.GET.failure);
                }
                return data;
            })
            .then((fetchedDogData) => {
                setDogData(fetchedDogData);
                setIsLoading(false);
            })
            .catch((e) => {
                console.error(e);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_RESPONSES.DOG_PAGE.GET.failure,
                });
                navigateToDogsList();
            });
    }

    useEffect(() => {
        fetchDogData(dogId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (responseState?.isSuccess === false) fetchDogData(dogId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

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
            {isLoading ? (
                <LoaderWrapper>
                    <Title>Please wait...</Title>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <DogForm
                    dogData={dogData}
                    formType="EDIT"
                    handleDelete={handleDelete}
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

export default connect(mapStateToProps)(EditDog);
