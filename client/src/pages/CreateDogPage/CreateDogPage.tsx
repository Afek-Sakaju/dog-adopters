import React, { type ReactNode, useEffect, useMemo, useState } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import type { Dog, User } from '@/types';
import { type RootState, getUserSelector } from '@/store';
import { DogProxy } from '@/proxies';
import { APP_PATHS, FORM_SUBMIT_REDIRECT_DELAY } from '@/utils';
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
    const { t } = useTranslation();

    const isLoggedIn: boolean = !!user;

    const navigate: NavigateFunction = useNavigate();
    const navigateToDogsListPage = (): void => {
        setTimeout(
            () => navigate(APP_PATHS.dogsList),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };
    const navigateToLoginPage = () => navigate(APP_PATHS.login);

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
            ? t('alert.dog.create.success')
            : t('alert.dog.create.failure');

        return (
            <Alert severity={alertSeverity} variant="filled">
                {alertText}
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
                <Loader />
            ) : (
                <DogForm formType="create" isNew onSubmit={handleSubmit} />
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

const mapStateToProps = (state: RootState) => ({
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(CreateDogPage);
