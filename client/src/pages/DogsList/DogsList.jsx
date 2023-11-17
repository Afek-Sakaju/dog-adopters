import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TITLES } from '@utils';
import { DogProxy } from '@proxies';
import { DogsDataFilterForm, DogsDataList } from '@components';
import { PageContainer, Loader, Title } from './DogsList.styled';

export default function DogsList() {
    const [availableDogsRaces, setAvailableDogsRaces] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [dogsDataList, setDogsDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [queryFilters, setQueryFilters] = useState({});

    const navigate = useNavigate();

    const formFiltrationSubmitHandler = (filters) => {
        setQueryFilters(filters);
        setCurrentPage(1);
    };

    const fetchFilteredDogsData = async (filters = {}) => {
        await DogProxy.getFilteredDogsList({ queryFilters: filters })
            .then(({ data, pagination }) => {
                setTotalPages(pagination.totalPages);

                const dogsData = data.map((dogData) => {
                    const onClickHandler = () => {
                        navigate(`/dogs/${dogData._id}`);
                    };
                    return { ...dogData, onClick: onClickHandler };
                });
                setDogsDataList(dogsData);
                setIsLoading(false);
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
                itemsPerPage: 9,
            });
        };

        fetchFullDogsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, queryFilters]);

    useEffect(() => {
        const fetchAvailableRaces = async () => {
            await DogProxy.getRacesList()
                .then((responseData) => {
                    setAvailableDogsRaces(responseData);
                    setIsLoading(false);
                })
                .catch((e) => {
                    console.error(e);
                    setAvailableDogsRaces([]);
                });
        };

        fetchAvailableRaces();
    }, []);

    return !isLoading ? (
        <PageContainer>
            <Title>{TITLES.DOGS_LIST_PAGE}</Title>
            <DogsDataFilterForm
                onSubmit={formFiltrationSubmitHandler}
                racesList={availableDogsRaces}
            />
            <DogsDataList
                currentPage={currentPage}
                dogsData={dogsDataList}
                onPageSelection={pageSelectionHandler}
                totalPages={totalPages}
            />
        </PageContainer>
    ) : (
        <>
            <Title>Please wait...</Title>
            <Loader />
        </>
    );
}
