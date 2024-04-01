/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserSelector } from '#store';
import { DogProxy } from '#proxies';
import {
    APP_PATHS,
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    PAGES_ALERT_RESPONSES,
} from '#utils';
import {
    Alert,
    DogForm,
    Loader,
    PageContainer,
    Snackbar,
} from './EditDogPage.styled';

// eslint-disable-next-line no-unused-vars
function EditDogPage({ user }) {
    const [dogData, setDogData] = useState(null);
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // 0: Not deleted/deleting | -1: Deletion under process | 1: Dog has been deleted

    const { dogId } = useParams();
    const isLoggedIn = !!user;

    const navigate = useNavigate();
    const navigateToDogsListPage = () => {
        setTimeout(
            () => navigate(APP_PATHS.DOGS_DATA),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };
    const navigateToLoginPage = () => navigate(APP_PATHS.LOGIN);

    const handleSubmit = async (data) => {
        setIsLoading(true);

        const requestParams = { dogData: data, id: dogId };
        await DogProxy.updateDog(requestParams)
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_ALERT_RESPONSES.DOG_PAGE.EDIT.success,
                });
                setDogData(data);
            })
            .then(() => navigateToDogsListPage())
            .catch((e) => {
                console.error(e);
                setDogData(null);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_ALERT_RESPONSES.DOG_PAGE.EDIT.failure,
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
                    message: PAGES_ALERT_RESPONSES.DOG_PAGE.DELETE.success,
                });
                setDogData(null);
            })
            .then(() => navigateToDogsListPage())
            .catch((e) => {
                console.error(e);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_ALERT_RESPONSES.DOG_PAGE.DELETE.failure,
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
                    throw Error(PAGES_ALERT_RESPONSES.DOG_PAGE.GET.failure);
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
                    message: PAGES_ALERT_RESPONSES.DOG_PAGE.GET.failure,
                });
                navigateToDogsListPage();
            });
    }

    useEffect(() => {
        if (!isLoggedIn) navigateToLoginPage();
        fetchDogData(dogId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (responseState?.isSuccess === false) fetchDogData(dogId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    const alert = useMemo(() => {
        if (responseState?.isSuccess === undefined) return null;

        const severity = responseState?.isSuccess ? 'success' : 'error';
        return (
            <Alert severity={severity} variant="filled">
                {responseState?.message}
            </Alert>
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return isLoggedIn ? (
        <PageContainer>
            {isLoading ? (
                <Loader
                    title={
                        responseState?.isSuccess
                            ? COMPONENTS_CONTENT.LOADER.DOG_FORM_SUCCESS
                            : COMPONENTS_CONTENT.LOADER.DOG_FORM_WAIT
                    }
                    color="#1976d2"
                />
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
    ) : null;
}

const mapStateToProps = (state) => ({
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(EditDogPage);
