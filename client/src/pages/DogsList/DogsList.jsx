/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    APP_PATHS,
    DOGS_LIST_DEFAULT_FILTRATION,
    MAX_DOG_CARDS_PER_PAGE,
} from '#utils';
import { getUserSelector } from '#store';
import { DogProxy } from '#proxies';
import {
    Dialog,
    DogsDataFilterForm,
    DogsDataList,
    PageContainer,
    ShowFiltersButton,
} from './DogsList.styled';

function DogsList({ user }) {
    const [availableDogsRaces, setAvailableDogsRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [shouldShowDialog, setShouldShowDialog] = useState(false);
    const [dogsDataList, setDogsDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [queryFilters, setQueryFilters] = useState(
        DOGS_LIST_DEFAULT_FILTRATION
    );

    const dogsListContainerRef = useRef(null);

    const isLoggedIn = !!user;

    const navigate = useNavigate();
    const navigateToDogPage = (dogId) => {
        navigate(`${APP_PATHS.DOGS_DATA}/${dogId}`);
    };
    const navigateToLoginPage = () => navigate(APP_PATHS.LOGIN);

    const scrollDogsListContainerToTop = () => {
        dogsListContainerRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formFiltrationSubmitHandler = (filters) => {
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

                const dogsData = data.map((dogData) => {
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

    const pageSelectionHandler = (_event, value) => setCurrentPage(value);
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
            <DogsDataFilterForm
                onSubmit={formFiltrationSubmitHandler}
                racesList={availableDogsRaces}
                disableSubmit={isLoading}
                shouldHideOnSmallScreens
            />
            <DogsDataList
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
                <DogsDataFilterForm
                    onSubmit={formFiltrationSubmitHandler}
                    racesList={availableDogsRaces}
                    disableSubmit={isLoading}
                />
            </Dialog>
        </PageContainer>
    ) : null;
}

const mapStateToProps = (state) => ({
    user: getUserSelector(state),
});

export default connect(mapStateToProps)(DogsList);
