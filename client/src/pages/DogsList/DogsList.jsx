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

    const navigate = useNavigate();

    const onSubmitHandler = async (queryFilters) => {
        await DogProxy.getFilteredDogsList({ queryFilters })
            .then(({ data }) => {
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
                onSubmit={onSubmitHandler}
                racesList={availableDogsRaces}
            />
            <DogsDataList dogsData={dogsDataList} />
        </PageContainer>
    ) : (
        <>
            <Title>Please wait...</Title>
            <Loader />
        </>
    );
}
