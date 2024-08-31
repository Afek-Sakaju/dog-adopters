import type { FC, ReactNode } from 'react';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import type { Dog } from '@/types';
import {
    DogCard,
    DogListTitle,
    DogListTitleContainer,
    DogsListContainer,
    DogsListInnerContainer,
    KennelIcon,
    Loader,
} from './DogsList.styled';

const DogsDataNotFound = (): ReactNode => <KennelIcon />;

interface DogCardData extends Dog {
    onClick?: () => void;
}

interface DogsListProps {
    dogsData?: DogCardData[];
    elevation?: number;
    isLoading?: boolean;
    fetchNextPage?: VoidFunction;
    [key: string]: unknown;
}

const DogsList: FC<DogsListProps> = (props): ReactNode => {
    const {
        dogsData,
        elevation = 0,
        isLoading,
        fetchNextPage,
        ...rest
    } = props;
    const { t } = useTranslation();
    const dogsListContainerRef = useRef<HTMLDivElement>(null);

    const dogsListTitleText =
        dogsData?.length > 0
            ? `${t('components.dogs_list.searches_found')} ${dogsData?.length}`
            : t('components.dogs_list.filtered_list_empty');

    const handleScroll = () => {
        if (!dogsListContainerRef?.current) return;

        const { scrollTop, scrollHeight, clientHeight } =
            dogsListContainerRef.current;

        const shouldFetchMoreData = scrollTop + clientHeight === scrollHeight;
        if (shouldFetchMoreData) fetchNextPage?.();
    };

    if (isLoading) return <Loader />;
    return (
        <DogsListContainer elevation={elevation} {...rest}>
            <DogListTitleContainer>
                <DogListTitle>
                    {isLoading ? 'Loading...' : dogsListTitleText}
                </DogListTitle>
            </DogListTitleContainer>
            {dogsData?.length ? (
                <DogsListInnerContainer
                    ref={dogsListContainerRef}
                    onScroll={handleScroll}
                >
                    {dogsData.map(
                        (
                            {
                                age,
                                name,
                                gender,
                                image,
                                isDesexed,
                                isVaccinated,
                                onClick,
                                race,
                                status,
                            },
                            i
                        ) => (
                            <DogCard
                                key={`${i}-${name}`}
                                age={age}
                                gender={gender}
                                image={image}
                                isAdopted={!!status}
                                isDesexed={isDesexed}
                                isVaccinated={isVaccinated}
                                name={name}
                                onClick={onClick}
                                race={race}
                            />
                        )
                    )}
                </DogsListInnerContainer>
            ) : (
                <DogsDataNotFound />
            )}
        </DogsListContainer>
    );
};

export default DogsList;
