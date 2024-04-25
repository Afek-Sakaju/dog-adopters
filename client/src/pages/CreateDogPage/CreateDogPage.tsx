import React, { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserSelector } from '@/store';
import { DogProxy } from '@/proxies';
import {
    APP_PATHS,
    COMPONENTS_CONTENT,
    FORM_SUBMIT_REDIRECT_DELAY,
    PAGES_ALERT_RESPONSES,
} from '@/utils';
import type { Dog, User } from '@/types';
import {
    Alert,
    DogForm,
    Loader,
    PageContainer,
    Snackbar,
} from './CreateDogPage.styled';

interface CreateDogPageProps {
    user: User;
}

function CreateDogPage({ user }: CreateDogPageProps): ReactNode {
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const isLoggedIn: boolean = !!user;

    const navigate: NavigateFunction = useNavigate();
    const navigateToDogsListPage = (): void => {
        setTimeout(
            () => navigate(APP_PATHS.DOGS_DATA),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };
    const navigateToLoginPage = () => navigate(APP_PATHS.LOGIN);

    const handleSubmit = async (dogFormData: Dog) => {
        setIsLoading(true);

        try {
            // The fullDogData includes the dogFormData & the owner's id
            const fullDogData = { ...dogFormData, owner: user?._id ?? null };
            const requestParams = { dogData: fullDogData };
            await DogProxy.createDog(requestParams);

            setResponseState(true);
            navigateToDogsListPage();
        } catch (error) {
            console.error(error);
            setResponseState(false);
            setIsLoading(false);
        }
    };

    const alert = useMemo(() => {
        if (responseState === null) return null;

        const alertSeverity = responseState ? 'success' : 'error';
        const alertText = responseState
            ? // @ts-ignore
              PAGES_ALERT_RESPONSES.DOG_PAGE.CREATE.success
            : // @ts-ignore
              PAGES_ALERT_RESPONSES.DOG_PAGE.CREATE.failure;

        return (
            <Alert severity={alertSeverity} variant="filled">
                {alertText}
            </Alert>
        );
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
                        responseState
                            ? COMPONENTS_CONTENT.LOADER.DOG_FORM_SUCCESS
                            : COMPONENTS_CONTENT.LOADER.DOG_FORM_WAIT
                    }
                    color="#1976d2"
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
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(CreateDogPage);