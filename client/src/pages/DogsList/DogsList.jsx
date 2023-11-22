import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    APP_PATHS,
    DOGS_LIST_DEFAULT_FILTRATION,
    MAX_DOG_CARDS_PER_PAGE,
    TITLES,
} from '@utils';
import { DogProxy } from '@proxies';
import { DogsDataFilterForm, DogsDataList } from '@components';
import { PageContainer, Title } from './DogsList.styled';

export default function DogsList() {
    const [availableDogsRaces, setAvailableDogsRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dogsDataList, setDogsDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [queryFilters, setQueryFilters] = useState(
        DOGS_LIST_DEFAULT_FILTRATION
    );

    const dogsListContainerRef = useRef(null);

    const navigate = useNavigate();

    const scrollDogsListContainerToTop = () => {
        dogsListContainerRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formFiltrationSubmitHandler = (filters) => {
        const areFiltersUpdated =
            JSON.stringify(filters) !== JSON.stringify(queryFilters);
        if (!areFiltersUpdated) return;

        setQueryFilters(filters);
        setCurrentPage(1);
    };

    const fetchFilteredDogsData = async (filters = {}) => {
        await DogProxy.getFilteredDogsList({ queryFilters: filters })
            .then(({ data, pagination }) => {
                setTotalPages(pagination.totalPages);

                const dogsData = data.map((dogData) => {
                    const onClickHandler = () => {
                        navigate(`${APP_PATHS.DOGS_DATA}/${dogData._id}`);
                    };
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

    const pageSelectionHandler = (_event, value) => {
        setCurrentPage(value);
    };

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

    useEffect(() => {
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

    return (
        <PageContainer>
            <Title>{TITLES.DOGS_LIST_PAGE}</Title>
            <DogsDataFilterForm
                onSubmit={formFiltrationSubmitHandler}
                racesList={availableDogsRaces}
                disableSubmit={isLoading}
            />
            <DogsDataList
                currentPage={currentPage}
                dogsData={dogsDataList}
                onPageSelection={pageSelectionHandler}
                totalPages={totalPages}
                isLoading={isLoading}
                ref={dogsListContainerRef}
            />
        </PageContainer>
    );
}
