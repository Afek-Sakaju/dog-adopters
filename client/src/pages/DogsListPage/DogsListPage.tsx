import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { type NavigateFunction, useNavigate } from 'react-router-dom';

import type { Dog, DogFiltersFormValues, PaginationData, User } from '@/types';
import { DogProxy } from '@/proxies';
import { type RootState, getUserSelector } from '@/store';
import {
    APP_PATHS,
    MAX_DOG_AGE,
    MAX_DOG_CARDS_PER_PAGE,
    MIN_DOG_AGE,
} from '@/utils';
import {
    DogFiltersForm,
    DogsList,
    MainContentContainer,
    Page,
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [totalPages, setTotalPages] = useState(1);
    const [queryFilters, setQueryFilters] = useState({
        gender: '',
        maxAge: MAX_DOG_AGE,
        minAge: MIN_DOG_AGE,
        name: '',
        breed: '',
        status: '',
    } as DogFiltersFormValues);

    const isLoggedIn: boolean = !!user;

    const navigate: NavigateFunction = useNavigate();
    const navigateToDogViewPage = (dogId: string) => {
        navigate(`${APP_PATHS.viewDog}/${dogId}`);
    };
    const navigateToLoginPage = () => navigate(APP_PATHS.login);

    const formFiltrationSubmitHandler = (filters: DogFiltersFormValues) => {
        const areFiltersUpdated =
            JSON.stringify(filters) !== JSON.stringify(queryFilters);
        if (!areFiltersUpdated) return;

        if (shouldShowDialog) setShouldShowDialog(false);
        setQueryFilters(filters);
        setCurrentPage(1);
    };

    const fetchFilteredDogsData = async (
        filters = {},
        preserveCurrentData = false
    ) => {
        await DogProxy.getFilteredDogsList({ queryFilters: filters })
            .then(
                ({
                    data,
                    pagination,
                }: {
                    data: Dog[];
                    pagination: PaginationData;
                }) => {
                    setTotalPages(pagination.totalPages);

                    const dogsData: Dog[] = data.map((dogData: Dog) => {
                        const { _id: dogId } = dogData;
                        const onClickHandler = () =>
                            navigateToDogViewPage(dogId);

                        return { ...dogData, onClick: onClickHandler };
                    });
                    setDogsDataList((currentData) => [
                        ...(preserveCurrentData ? currentData : []),
                        ...dogsData,
                    ]);

                    // Implemented this timeout to achieve specific UI outcomes
                    setTimeout(() => setIsLoading(false), 100);
                }
            )
            .catch((e) => {
                console.error(e);
                setDogsDataList([]);
            });
    };

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
    }, []);

    const fetchFullDogsData = async (preserveCurrentData?: boolean) => {
        await fetchFilteredDogsData(
            {
                ...queryFilters,
                page: currentPage,
                itemsPerPage: MAX_DOG_CARDS_PER_PAGE,
            },
            preserveCurrentData
        );
    };

    const fetchNextPage = () => {
        const hasReachedLastPage: boolean = totalPages === currentPage;
        if (hasReachedLastPage) return;

        setCurrentPage((pageNumber) => pageNumber + 1);
    };

    useEffect(() => {
        fetchFullDogsData(true);
    }, [currentPage]);

    useEffect(() => {
        fetchFullDogsData();
    }, [queryFilters]);

    return isLoggedIn ? (
        <Page>
            <MainContentContainer>
                <DogFiltersForm
                    onSubmit={formFiltrationSubmitHandler}
                    racesList={availableDogsRaces}
                    disableSubmit={isLoading}
                />
                <DogsList
                    dogsData={dogsDataList}
                    isLoading={isLoading}
                    fetchNextPage={fetchNextPage}
                />
            </MainContentContainer>
        </Page>
    ) : null;
}

const mapStateToProps = (state: RootState) => ({
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(DogsListPage);
