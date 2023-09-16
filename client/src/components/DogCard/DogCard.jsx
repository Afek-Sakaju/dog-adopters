import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Text,
    DesexedIcon,
    Zoom,
    VaccinatedIcon,
} from './DogCard.styled';

export default function DogCard({
    age,
    gender,
    image,
    isAdopted,
    isDesexed,
    isVaccinated,
    name,
    onClick,
    race,
    ...props
}) {
    return (
        <Zoom in style={{ transitionDelay: '100ms' }}>
            <Card imageUrl={image} {...props}>
                {name && <Text>{`I am ${name}`}</Text>}
                {age && <Text>{`My age is ${age}`}</Text>}
                {race && <Text>{`And my race is ${race}`}</Text>}
                {isDesexed && (
                    <>
                        <DesexedIcon />
                        <Text>Desexed</Text>
                    </>
                )}
                {isVaccinated && (
                    <>
                        <VaccinatedIcon />
                        <Text>Vaccinated</Text>
                    </>
                )}
                {isAdopted ? (
                    <Text>I'm looking for an adoption</Text>
                ) : (
                    <Text>I have been adopted</Text>
                )}
            </Card>
        </Zoom>
    );
}

DogCard.propTypes = {
    age: PropTypes.number,
    gender: PropTypes.string,
    image: PropTypes.string,
    isAdopted: PropTypes.bool,
    isDesexed: PropTypes.bool,
    isVaccinated: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    race: PropTypes.string,
};

DogCard.defaultProps = {
    age: undefined,
    gender: undefined,
    image: undefined,
    isAdopted: undefined,
    isDesexed: undefined,
    isVaccinated: undefined,
    name: undefined,
    onClick: undefined,
    race: undefined,
};
