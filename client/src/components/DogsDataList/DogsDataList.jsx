import React from 'react';
import PropTypes from 'prop-types';

//	import { COMPONENTS_CONTENT } from '@utils';
import { DogCard, DogsListContainer } from './DogsDataList.styled';

export default function DogsDataList({ dogsData, ...props }) {
    return (
        <DogsListContainer {...props}>
            {dogsData?.map(
                (
                    {
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
};

DogsDataList.defaultProps = {
    dogsData: undefined,
};
