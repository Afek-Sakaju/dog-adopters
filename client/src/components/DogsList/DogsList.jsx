import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { COMPONENTS_CONTENT, MUI_LOADER_VARIANTS } from '#utils';
import {
    EmptyDogsDataText,
    DogCard,
    DogsListInnerContainer,
    DogsListContainer,
    Loader,
    PaginationBar,
    PaginationBarContainer,
    Zoom,
    KennelIcon,
} from './DogsList.styled';

const DogsDataNotFound = () => {
    return (
        <>
            <EmptyDogsDataText>
                {COMPONENTS_CONTENT.DOGS_DATA.DATA_NOT_FOUND}
            </EmptyDogsDataText>
            <KennelIcon />
        </>
    );
};

const DogsList = forwardRef(function DogsList(
    {
        currentPage,
        dogsData,
        elevation,
        isLoading,
        onPageSelection,
        totalPages,
        ...props
    },
    ref
) {
    return (
        <DogsListContainer ref={ref} elevation={elevation} {...props}>
            {!isLoading ? (
                <>
                    {dogsData?.length ? (
                        <DogsListInnerContainer>
                            {dogsData.map(
                                (
                                    {
                                        age,
                                        dogName: name,
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
            ) : (
                <Loader size="110px" variant={MUI_LOADER_VARIANTS.CIRCULAR} />
            )}
        </DogsListContainer>
    );
});

DogsList.propTypes = {
    currentPage: PropTypes.number,
    dogsData: PropTypes.arrayOf(
        PropTypes.shape({
            gender: PropTypes.string,
            image: PropTypes.string,
            isAdopted: PropTypes.bool,
            isDesexed: PropTypes.bool,
            isVaccinated: PropTypes.bool,
            name: PropTypes.string,
            onClick: PropTypes.func,
            race: PropTypes.string,
        })
    ),
    elevation: PropTypes.number,
    isLoading: PropTypes.bool,
    onPageSelection: PropTypes.func,
    totalPages: PropTypes.number,
};

DogsList.defaultProps = {
    currentPage: undefined,
    dogsData: undefined,
    elevation: 0,
    isLoading: undefined,
    onPageSelection: undefined,
    totalPages: undefined,
};

export default DogsList;
