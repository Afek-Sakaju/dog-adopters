import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { COMPONENTS_CONTENT, MUI_LOADER_VARIANTS } from '@utils';
import {
    DataListText,
    DogCard,
    DogsListInnerContainer,
    DogsListContainer,
    Loader,
    PaginationBar,
    PaginationBarContainer,
    Zoom,
} from './DogsDataList.styled';

const DogsDataList = forwardRef(function DogsDataList(
    { currentPage, dogsData, isLoading, onPageSelection, totalPages, ...props },
    ref
) {
    return (
        <DogsListContainer ref={ref} {...props}>
            {!isLoading ? (
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
                            <DataListText>
                                {COMPONENTS_CONTENT.DOGS_DATA._DATA_NOT_FOUND}
                            </DataListText>
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
            ) : (
                <Loader size="110px" variant={MUI_LOADER_VARIANTS.CIRCULAR} />
            )}
        </DogsListContainer>
    );
});

DogsDataList.propTypes = {
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
    isLoading: PropTypes.bool,
    onPageSelection: PropTypes.func,
    totalPages: PropTypes.number,
};

DogsDataList.defaultProps = {
    currentPage: undefined,
    dogsData: undefined,
    isLoading: undefined,
    onPageSelection: undefined,
    totalPages: undefined,
};

export default DogsDataList;
