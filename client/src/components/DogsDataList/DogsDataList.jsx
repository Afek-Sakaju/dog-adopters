import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import {
    DogCard,
    DogsDataContainer,
    DogsListContainer,
    PaginationBar,
    Stack,
} from './DogsDataList.styled';

const DogsDataList = forwardRef(function DogsDataList(
    { currentPage, dogsData, onPageSelection, totalPages, ...props },
    ref
) {
    return (
        <DogsListContainer ref={ref} {...props}>
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
            <Stack>
                <PaginationBar
                    color="primary"
                    count={totalPages}
                    onChange={onPageSelection}
                    page={currentPage}
                />
            </Stack>
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
    onPageSelection: PropTypes.func,
    totalPages: PropTypes.number,
};

DogsDataList.defaultProps = {
    currentPage: 1,
    dogsData: undefined,
    onPageSelection: undefined,
    totalPages: undefined,
};

export default DogsDataList;
