import React from 'react';
import PropTypes from 'prop-types';

import {
    DogCard,
    DogsListContainer,
    PaginationBar,
    Stack,
    DogsDataContainer,
} from './DogsDataList.styled';

export default function DogsDataList({
    dogsData,
    totalPages,
    onPageSelection,
    ...props
}) {
    return (
        <DogsListContainer {...props}>
            <DogsDataContainer>
                {dogsData?.map(
                    (
                        {
                            age,
                            gender,
                            image,
                            status,
                            isDesexed,
                            isVaccinated,
                            dogName: name,
                            onClick,
                            race,
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
                    count={totalPages}
                    color="primary"
                    onChange={onPageSelection}
                />
            </Stack>
        </DogsListContainer>
    );
}

DogsDataList.propTypes = {
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
    totalPages: PropTypes.number,
    onPageSelection: PropTypes.func,
};

DogsDataList.defaultProps = {
    dogsData: undefined,
    totalPages: undefined,
    onPageSelection: undefined,
};
