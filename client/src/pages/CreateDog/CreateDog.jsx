/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserReselectSelector } from '@store';
import { DogProxy } from '@proxies';
import { APP_PATHS, FORM_SUBMIT_REDIRECT_DELAY, PAGES_RESPONSES } from '@utils';
import { DogForm } from '@components';
import {
    Alert,
    Snackbar,
    PageContainer,
    Loader,
    Title,
    LoaderWrapper,
} from './CreateDog.styled';

function CreateDog({ user }) {
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const navigateToDogsListPage = () => {
        setTimeout(
            () => navigate(APP_PATHS.DOGS_DATA),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };

    const handleSubmit = async (data) => {
        setIsLoading(true);

        const requestParams = {
            dogData: { ...data, owner: user?._id ?? null },
        };

        await DogProxy.createDog(requestParams)
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_RESPONSES.DOG_PAGE.CREATE.success,
                });
            })
            .then(() => navigateToDogsListPage())
            .catch((e) => {
                console.error(e);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_RESPONSES.DOG_PAGE.CREATE.failure,
                });
                setIsLoading(false);
            });
    };

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

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <PageContainer>
            {isLoading ? (
                <LoaderWrapper>
                    <Title>Please wait...</Title>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <DogForm formType="CREATE" isNew onSubmit={handleSubmit} />
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

export default connect(mapStateToProps)(CreateDog);
