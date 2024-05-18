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
    DogImage,
    DogImagePreviewContainer,
    DogInformationContentWrapper,
    EditDogSection,
    Loader,
    MainContainer,
    PageContainer,
    Snackbar,
    Text,
    EditIcon,
} from './ViewDogPage.styled';

interface ViewDogPageProps {
    user: User;
}

function ViewDogPage({ user }: ViewDogPageProps): ReactNode {
    const [dogData, setDogData] = useState<Dog>(null);
    const [responseState, setResponseState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useTranslation();

    const { dogId } = useParams();
    const isLoggedIn: boolean = !!user || true;

    const navigate: NavigateFunction = useNavigate();
    const navigateToDogsListPage = (): void => {
        setTimeout(
            () => navigate(APP_PATHS.dogsList),
            FORM_SUBMIT_REDIRECT_DELAY
        );
    };
    const navigateToLoginPage = (): void => navigate(APP_PATHS.login);

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
    }, []);

    useEffect(() => {
        if (responseState === false) fetchDogData(dogId);
    }, [responseState]);

    const alert = useMemo(() => {
        if (responseState === null) return null;

        const alertSeverity = responseState ? 'success' : 'error';
        const alertText = responseState
            ? t(`alert.dog.get.success`)
            : t(`alert.dog.get.failure`);
        return (
            <Alert severity={alertSeverity} variant="filled">
                {alertText}
            </Alert>
        );
    }, [responseState]);

    return isLoggedIn ? (
        <PageContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <MainContainer>
                    <DogImagePreviewContainer>
                        <DogImage />
                        <EditDogSection>
                            <Text>s</Text>
                            <EditIcon />
                        </EditDogSection>
                    </DogImagePreviewContainer>
                    <DogInformationContentWrapper>
                        <Text>name</Text>
                        <Text>Age: {dogData?.age}</Text>
                        <Text>Gender: {dogData?.gender}</Text>
                        <Text>Race: {dogData?.race}</Text>
                        <Text>
                            Characteristics:{' '}
                            {dogData?.characteristics.join(', ').slice(0, -2)}
                        </Text>
                        <Text>Vaccinated</Text>
                        <Text>Desexed</Text>
                        <Text>Notes: {`\n${dogData?.notes}`}</Text>
                    </DogInformationContentWrapper>
                </MainContainer>
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

export default connect(mapStateToProps)(ViewDogPage);
