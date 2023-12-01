/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserReselectSelector } from '@store';
import { DogProxy } from '@proxies';
import {
    APP_PATHS,
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    PAGES_ALERT_RESPONSES,
} from '@utils';
import { DogForm } from '@components';
import { Alert, Snackbar, PageContainer, Loader } from './CreateDog.styled';

function CreateDog({ user }) {
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

        const requestParams = {
            dogData: { ...data, owner: user?._id ?? null },
        };

        await DogProxy.createDog(requestParams)
            .then(() => {
                setResponseState({
                    isSuccess: true,
                    message: PAGES_ALERT_RESPONSES.DOG_PAGE.CREATE.success,
                });
            })
            .then(() => navigateToDogsListPage())
            .catch((e) => {
                console.error(e);
                setResponseState({
                    isSuccess: false,
                    message: PAGES_ALERT_RESPONSES.DOG_PAGE.CREATE.failure,
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
        if (!isLoggedIn) navigateToLoginPage();

        setIsLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isLoggedIn ? (
        <PageContainer>
            {isLoading ? (
                <Loader
                    title={
                        responseState?.isSuccess
                            ? COMPONENTS_CONTENT.LOADER.DOG_CREATE_SUCCESS
                            : ' '
                    }
                    color="#e91d25"
                />
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
    ) : null;
}

const mapStateToProps = (state) => ({
    user: getUserReselectSelector(state),
});

export default connect(mapStateToProps)(CreateDog);
