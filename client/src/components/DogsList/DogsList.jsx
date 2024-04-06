import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { COMPONENTS_CONTENT, MUI_LOADER_VARIANTS } from '#utils';
import {
    DogCard,
    DogsListInnerContainer,
    DogsListContainer,
    Loader,
    PaginationBar,
    PaginationBarContainer,
    Zoom,
    KennelIcon,
    DogListTitleContainer,
    DogListTitle,
} from './DogsList.styled';

const DogsDataNotFound = () => {
    return <KennelIcon />;
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
    const dogsListTitleText =
        dogsData?.length > 0
            ? `Dog searches results found: ${dogsData?.length}`
            : COMPONENTS_CONTENT.DOGS_DATA.DATA_NOT_FOUND;

    return (
        <DogsListContainer ref={ref} elevation={elevation} {...props}>
            <DogListTitleContainer>
                <DogListTitle>
                    {isLoading ? 'Loading...' : dogsListTitleText}
                </DogListTitle>
            </DogListTitleContainer>
            {isLoading ? (
                <Loader size="110px" variant={MUI_LOADER_VARIANTS.CIRCULAR} />
            ) : (
                <>
                    <DogsListInnerContainer>
                        {dogsData?.length ? (
                            dogsData.map(
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
