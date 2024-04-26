import type { ChangeEvent, ReactNode } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { type NavigateFunction, useNavigate } from 'react-router-dom';

import type { Dog, DogFiltersFormValues, User } from '@/types';
import { DogProxy } from '@/proxies';
import { getUserSelector } from '@/store';
import {
    APP_PATHS,
    MAX_DOG_AGE,
    MAX_DOG_CARDS_PER_PAGE,
    MIN_DOG_AGE,
} from '@/utils';
import {
    Dialog,
    DogFiltersForm,
    DogsList,
    MainContentContainer,
    PageContainer,
    ShowFiltersButton,
} from './DogsListPage.styled';

interface DogsListPageProps {
    user: User;
}

function DogsListPage({ user }: DogsListPageProps): ReactNode {
    const [availableDogsRaces, setAvailableDogsRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [shouldShowDialog, setShouldShowDialog] = useState(false);
    const [dogsDataList, setDogsDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [queryFilters, setQueryFilters] = useState({
        gender: '',
        maxAge: MAX_DOG_AGE,
        minAge: MIN_DOG_AGE,
        name: '',
        race: '',
        status: '',
    } as DogFiltersFormValues);

    const dogsListContainerRef = useRef(null);

    // Todo: remove true later
    const isLoggedIn: boolean = true || !!user;

    const navigate: NavigateFunction = useNavigate();
    const navigateToDogPage = (dogId: string) => {
        navigate(`${APP_PATHS.DOGS_DATA}/${dogId}`);
    };
    const navigateToLoginPage = () => navigate(APP_PATHS.LOGIN);

    const scrollDogsListContainerToTop = () => {
        dogsListContainerRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formFiltrationSubmitHandler = (filters: DogFiltersFormValues) => {
        const areFiltersUpdated =
            JSON.stringify(filters) !== JSON.stringify(queryFilters);
        if (!areFiltersUpdated) return;

        if (shouldShowDialog) setShouldShowDialog(false);
        setQueryFilters(filters);
        setCurrentPage(1);
    };

    const fetchFilteredDogsData = async (filters = {}) => {
        await DogProxy.getFilteredDogsList({ queryFilters: filters })
            .then(({ data, pagination }) => {
                setTotalPages(pagination.totalPages);

                const dogsData: Dog[] = data.map((dogData: Dog) => {
                    const { _id: dogId } = dogData;
                    const onClickHandler = () => navigateToDogPage(dogId);

                    return { ...dogData, onClick: onClickHandler };
                });
                setDogsDataList(dogsData);

                // Implemented a timeout to achieve specific UI outcomes
                setTimeout(() => {
                    setIsLoading(false);
                }, 100);
            })
            .catch((e) => {
                console.error(e);
                setDogsDataList([]);
            });
    };

    const pageSelectionHandler = (_event: ChangeEvent, value: number) =>
        setCurrentPage(value);
    const showFiltersHandler = () => setShouldShowDialog(true);
    const dialogCloseHandler = () => setShouldShowDialog(false);

    useEffect(() => {
        if (!isLoggedIn) navigateToLoginPage();

        const fetchAvailableRaces = async () => {
            await DogProxy.getRacesList()
                .then((responseData) => {
                    setAvailableDogsRaces(responseData);
                })
                .catch((e) => {
                    console.error(e);
                    setAvailableDogsRaces([]);
                });
        };

        fetchAvailableRaces();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchFullDogsData = async () => {
            await fetchFilteredDogsData({
                ...queryFilters,
                page: currentPage,
                itemsPerPage: MAX_DOG_CARDS_PER_PAGE,
            });
        };

        /* Adding a timeout improves UI and animation aesthetics 
			  by ensuring better timing and preventing undesired behavior. */
        setTimeout(() => scrollDogsListContainerToTop(), 200);
        fetchFullDogsData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, queryFilters]);

    return isLoggedIn ? (
        <PageContainer>
            <MainContentContainer>
                <DogFiltersForm
                    onSubmit={formFiltrationSubmitHandler}
                    racesList={availableDogsRaces}
                    disableSubmit={isLoading}
                    shouldHideOnSmallScreens
                />
                <DogsList
                    // @ts-ignore
                    currentPage={currentPage}
                    dogsData={dogsDataList}
                    onPageSelection={pageSelectionHandler}
                    totalPages={totalPages}
                    isLoading={isLoading}
                    ref={dogsListContainerRef}
                />
                <ShowFiltersButton
                    label="Advanced Filters"
                    onClick={showFiltersHandler}
                />
                <Dialog open={shouldShowDialog} onClose={dialogCloseHandler}>
                    <DogFiltersForm
                        onSubmit={formFiltrationSubmitHandler}
                        racesList={availableDogsRaces}
                        disableSubmit={isLoading}
                    />
                </Dialog>
            </MainContentContainer>
        </PageContainer>
    ) : null;
}

const mapStateToProps = (state) => ({
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(DogsListPage);
