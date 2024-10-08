import type { ReactNode } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import {
    type NavigateFunction,
    useNavigate,
    useParams,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Dog, User } from '@/types';
import { DogProxy } from '@/proxies';
import { type RootState, getUserSelector } from '@/store';
import { APP_PATHS, FORM_SUBMIT_REDIRECT_DELAY } from '@/utils';
import {
    Alert,
    DogForm,
    Loader,
    Page,
    Snackbar,
} from './EditDogPage.styled';

interface EditDogPageProps {
    user: User;
}

function EditDogPage({ user }: EditDogPageProps): ReactNode {
    const [dogData, setDogData] = useState(null);
    const [currentProcessType, setCurrentProcessType] = useState('GET');
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation();

    const { dogId } = useParams();
    const isLoggedIn: boolean = !!user;

    const navigate: NavigateFunction = useNavigate();
    const navigateToDogsListPage = (): void => {
        setTimeout(
            () => navigate(APP_PATHS.dogsList),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };
    const navigateToLoginPage = (): void => navigate(APP_PATHS.login);

    const handleSubmit = async (dogFormData: Dog): Promise<void> => {
        setIsLoading(true);
        setCurrentProcessType('edit');

        try {
            const requestParams: {
                dogData: Dog;
                id: string;
            } = { dogData: dogFormData, id: dogId };
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

    const handleDelete = async (): Promise<void> => {
        setIsLoading(true);
        setCurrentProcessType('delete');

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

    async function fetchDogData(id: string): Promise<void> {
        setIsLoading(true);

        try {
            const fetchedDogData: Dog = await DogProxy.getDogByID({ id });
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
            ? t(`alert.dog.${currentProcessType}.success`)
            : t(`alert.dog.${currentProcessType}.failure`);
        return (
            <Alert severity={alertSeverity} variant="filled">
                {alertText}
            </Alert>
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseState]);

    return isLoggedIn ? (
        <Page>
            {isLoading ? (
                <Loader />
            ) : (
                <DogForm
                    dogData={dogData}
                    formType="edit"
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
        </Page>
    ) : null;
}

const mapStateToProps = (state: RootState) => ({
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(EditDogPage);
