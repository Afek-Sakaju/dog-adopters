/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserSelector } from '@/store';
import { DogProxy } from '@/proxies';
import {
    APP_PATHS,
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    PAGES_ALERT_RESPONSES,
} from '@/utils';
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
    const [currentProcessType, setCurrentProcessType] = useState('GET');
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    const handleSubmit = async (dogFormData) => {
        setIsLoading(true);
        setCurrentProcessType('EDIT');

        try {
            const requestParams = { dogData: dogFormData, id: dogId };
            await DogProxy.updateDog(requestParams);

            setResponseState(true);
            setDogData(dogFormData);
            navigateToDogsListPage();
        } catch (error) {
            console.error(error);
            setDogData(null);
            setResponseState(false);
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        setIsLoading(true);
        setCurrentProcessType('DELETE');

        try {
            await DogProxy.deleteDog({ id: dogId });
            setResponseState(true);
            setDogData(null);
            navigateToDogsListPage();
        } catch (error) {
            console.error(error);
            setResponseState(false);
            setDogData(null);
            setIsLoading(false);
        }
    };

    async function fetchDogData(id) {
        setIsLoading(true);

        try {
            const fetchedDogData = await DogProxy.getDogByID({ id });
            if (!fetchedDogData) {
                throw Error("Error occurred while fetching dog's data");
            }

            setDogData(fetchedDogData);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setResponseState(false);
            navigateToDogsListPage();
        }
    }

    useEffect(() => {
        if (!isLoggedIn) navigateToLoginPage();
        fetchDogData(dogId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (responseState === false) fetchDogData(dogId);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    const alert = useMemo(() => {
        if (responseState === null) return null;

        const alertSeverity = responseState ? 'success' : 'error';
        const alertText = responseState
            ? PAGES_ALERT_RESPONSES.DOG_PAGE[currentProcessType].success
            : PAGES_ALERT_RESPONSES.DOG_PAGE[currentProcessType].failure;
        return (
            <Alert severity={alertSeverity} variant="filled">
                {alertText}
            </Alert>
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return isLoggedIn ? (
        <PageContainer>
            {isLoading ? (
                <Loader
                    title={
                        responseState
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
                onClose={() => {
                    setResponseState(null);
                    setCurrentProcessType('EDIT');
                }}
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
