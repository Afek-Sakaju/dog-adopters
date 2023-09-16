import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Text,
    DesexedIcon,
    VaccinatedIcon,
    LabeledIconBox,
    MainInfoText,
    InlineTextWrapper,
    MaleIcon,
    FemaleIcon,
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
    children,
    ...props
}) {
    const adoptionStatusText = isAdopted
        ? 'And I have been adopted.'
        : "And I'm looking for an adoption!";
    const mainDogInfoText =
        age !== undefined ? `I am ${name} (${age})` : `I am ${name}`;
    const genderIcon =
        gender && (gender === 'Male' ? <MaleIcon /> : <FemaleIcon />);

    return (
        <Card imageUrl={image} {...props}>
            <MainInfoText>{mainDogInfoText}</MainInfoText>
            {race && <Text>{`My race is ${race}`}</Text>}
            <Text>{adoptionStatusText}</Text>
            {(isDesexed || isVaccinated) && (
                <InlineTextWrapper>
                    {isVaccinated && (
                        <LabeledIconBox>
                            <Text>Vaccinated</Text>
                            <VaccinatedIcon />
                        </LabeledIconBox>
                    )}
                    {isDesexed && (
                        <LabeledIconBox>
                            <Text>Desexed</Text>
                            <DesexedIcon />
                        </LabeledIconBox>
                    )}
                </InlineTextWrapper>
            )}
            {genderIcon || null}
            {children}
        </Card>
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
    name: 'A dog',
    onClick: undefined,
    race: undefined,
};
