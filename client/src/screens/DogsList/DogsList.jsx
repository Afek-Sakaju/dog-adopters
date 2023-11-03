import React, { useEffect, useState } from 'react';

import { DogProxy } from '@proxies';
import { DogsDataFilterForm } from '@components';
import { PageContainer, Loader, Title } from './DogsList.styled';

export default function DogsList() {
    const [availableDogsRaces, setAvailableDogsRaces] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //	 http://localhost:3000/dogs/?page=1&itemsPerPage=5&status=1
    const onSubmitHandler = (filtersData) => {
			

		};

    useEffect(() => {
        const fetchAvailableRaces = async () => {
            await DogProxy.getRacesList()
                .then((responseData) => {
                    const dogsDistinctRacesData = responseData.map((race) => {
                        return { label: race, value: race };
                    });
                    setAvailableDogsRaces(dogsDistinctRacesData);
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
