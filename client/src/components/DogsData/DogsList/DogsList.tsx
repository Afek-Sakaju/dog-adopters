import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
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
    setCurrentPage?: Dispatch<SetStateAction<number>>;
    [key: string]: unknown;
}

const DogsList: FC<DogsListProps> = (props): ReactNode => {
    const {
        dogsData,
        elevation = 0,
        isLoading,
        setCurrentPage,
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

        const shouldFetchMoreData =
            scrollTop + clientHeight >= scrollHeight - 200;
        if (shouldFetchMoreData) setCurrentPage?.((page) => page + 1);
    };

    return (
        <DogsListContainer elevation={elevation} {...rest}>
            <DogListTitleContainer>
                <DogListTitle>
                    {isLoading ? 'Loading...' : dogsListTitleText}
                </DogListTitle>
            </DogListTitleContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <DogsListInnerContainer
                    ref={dogsListContainerRef}
                    onScroll={handleScroll}
                >
                    {dogsData?.length ? (
                        dogsData.map(
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
                        )
                    ) : (
                        <DogsDataNotFound />
                    )}
                </DogsListInnerContainer>
            )}
        </DogsListContainer>
    );
};

export default DogsList;
