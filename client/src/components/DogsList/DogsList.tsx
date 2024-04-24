import type { FC, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import type { Dog } from '@/types';
import { COMPONENTS_CONTENT } from '@/utils';
import {
    DogCard,
    DogListTitle,
    DogListTitleContainer,
    DogsListContainer,
    DogsListInnerContainer,
    KennelIcon,
    Loader,
    PaginationBar,
    PaginationBarContainer,
    Zoom,
} from './DogsList.styled';

const DogsDataNotFound = (): ReactNode => <KennelIcon />;

interface DogCardData extends Dog {
    onClick?: () => void;
}

interface DogsListProps {
    currentPage?: number;
    dogsData?: DogCardData[];
    elevation?: number;
    isLoading?: boolean;
    onPageSelection?: (event: React.ChangeEvent<unknown>, page: number) => void;
    totalPages?: number;
    [key: string]: unknown;
}

const DogsList: FC = forwardRef(function DogsList(
    props: DogsListProps,
    ref: Ref<HTMLDivElement>
): ReactNode {
    const {
        currentPage,
        dogsData,
        elevation = 0,
        isLoading,
        onPageSelection,
        totalPages,
        ...rest
    } = props;
    const dogsListTitleText =
        dogsData?.length > 0
            ? `Dog searches results found: ${dogsData?.length}`
            : COMPONENTS_CONTENT.DOGS_DATA.DATA_NOT_FOUND;

    return (
        <DogsListContainer ref={ref} elevation={elevation} {...rest}>
            <DogListTitleContainer>
                <DogListTitle>
                    {isLoading ? 'Loading...' : dogsListTitleText}
                </DogListTitle>
            </DogListTitleContainer>
            {isLoading ? (
                <Loader size="110px" variant="circular" />
            ) : (
                <>
                    <DogsListInnerContainer>
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
                    {currentPage && (
                        <Zoom in style={{ transitionDelay: '150ms' }}>
                            <PaginationBarContainer>
                                <PaginationBar
                                    color="primary"
                                    count={totalPages}
                                    onChange={onPageSelection}
                                    page={currentPage}
                                />
                            </PaginationBarContainer>
                        </Zoom>
                    )}
                </>
            )}
        </DogsListContainer>
    );
});

export default DogsList;
