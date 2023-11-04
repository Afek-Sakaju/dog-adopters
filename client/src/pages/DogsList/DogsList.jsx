import React, { useEffect, useState } from 'react';

import { DogProxy } from '@proxies';
import { DogsDataFilterForm } from '@components';
import { PageContainer, Loader, Title } from './DogsList.styled';

export default function DogsList() {
    const [availableDogsRaces, setAvailableDogsRaces] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [dogsDataList, setDogsDataList] = useState([]);

    const onSubmitHandler = async (queryFilters) => {
        await DogProxy.getFilteredDogsList({ queryFilters })
            .then((responseData) => {
                setDogsDataList(responseData);
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
            <DogsDataFilterForm
                onSubmit={onSubmitHandler}
                racesList={availableDogsRaces}
            />
        </PageContainer>
    ) : (
        <>
            <Title>Please wait...</Title>
            <Loader />
        </>
    );
}
