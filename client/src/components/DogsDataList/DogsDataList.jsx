import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import {
    DogCard,
    DogsDataContainer,
    DogsListContainer,
    Loader,
    PaginationBar,
    Stack,
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
                    <DogsDataContainer>
                        {dogsData?.map(
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
                    </DogsDataContainer>
                    {currentPage && (
                        <Zoom in style={{ transitionDelay: '150ms' }}>
                            <Stack>
                                <PaginationBar
                                    color="primary"
                                    count={totalPages}
                                    onChange={onPageSelection}
                                    page={currentPage}
                                />
                            </Stack>
                        </Zoom>
                    )}
                </>
            ) : (
                <Loader size="130px" />
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
