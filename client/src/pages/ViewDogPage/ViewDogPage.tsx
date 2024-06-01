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
import {
    APP_PATHS,
    FORM_SUBMIT_REDIRECT_DELAY,
    GENDERS_SELECT_PROPERTIES,
    getDogInformationText,
} from '@/utils';
import {
    Alert,
    DogImage,
    DogInformationContentWrapper,
    Loader,
    MainContainer,
    PageContainer,
    Snackbar,
    EditIcon,
    IconButton,
    DogInformationText,
    EditButtonContainer,
    DogNameText,
    FemaleIcon,
    MaleIcon,
    DogInformationTextAndIconContainer,
    VaccinatedIcon,
    DesexedIcon,
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

    const dogAge: string = getDogInformationText({
        nestedTranslationKey: 'age',
        informationValue: dogData?.age?.toString(),
        t,
    });

    const dogGenderValue: string = GENDERS_SELECT_PROPERTIES.find(
        (genderProperty) => genderProperty.value === dogData?.gender
    )?.label;
    const dogGender: string = getDogInformationText({
        nestedTranslationKey: 'gender',
        informationValue: dogGenderValue,
        t,
    });
    const dogGenderIcon: ReactNode =
        dogData?.gender === 'M' ? <MaleIcon /> : <FemaleIcon />;

    const dogRace: string = getDogInformationText({
        nestedTranslationKey: 'race',
        informationValue: dogData?.race,
        shouldAddSpaceBeforeValue: true,
        t,
    });
    const dogCharacteristics: string = getDogInformationText({
        nestedTranslationKey: 'characteristics',
        informationValue: dogData?.characteristics.join(', '),
        shouldAddSpaceBeforeValue: true,
        t,
    });
    const dogNotes: string = getDogInformationText({
        nestedTranslationKey: 'notes',
        informationValue: dogData?.notes,
        shouldAddSpaceBeforeValue: true,
        t,
    });

    return isLoggedIn ? (
        <PageContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <MainContainer>
                    <EditButtonContainer>
                        <IconButton icon={<EditIcon />} />
                    </EditButtonContainer>
                    <DogImage src={dogData?.image} />
                    <DogInformationContentWrapper>
                        <DogNameText>{dogData?.name}</DogNameText>
                        <DogInformationText>{dogAge}</DogInformationText>
                        {dogData?.isVaccinated && (
                            <DogInformationTextAndIconContainer>
                                <DogInformationText>
                                    Vaccinated
                                </DogInformationText>
                                <VaccinatedIcon />
                            </DogInformationTextAndIconContainer>
                        )}
                        {dogData?.isDesexed && (
                            <DogInformationTextAndIconContainer>
                                <DogInformationText>Desexed</DogInformationText>
                                <DesexedIcon />
                            </DogInformationTextAndIconContainer>
                        )}
                        <DogInformationTextAndIconContainer>
                            <DogInformationText>{dogGender}</DogInformationText>
                            {dogGenderIcon}
                        </DogInformationTextAndIconContainer>

                        <DogInformationText>{dogRace}</DogInformationText>
                        <DogInformationText>
                            {dogCharacteristics}
                        </DogInformationText>
                        <DogInformationText>{dogNotes}</DogInformationText>
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
