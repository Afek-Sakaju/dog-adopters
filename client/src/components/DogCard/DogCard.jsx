import React from 'react';
import PropTypes from 'prop-types';

import {
    COMPONENTS_CONTENT,
    GENDERS_SELECT_PROPERTIES,
    getDogRaceText,
    getDogAgeText,
} from '@/utils';
import {
    Card,
    DesexedIcon,
    FemaleIcon,
    IconsContainer,
    DogName,
    MaleIcon,
    Text,
    VaccinatedIcon,
    Icon,
    DogDataContentWrapper,
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
    const dogRaceText = getDogRaceText(race);
    const dogAgeText = getDogAgeText(age);
    const dogNameText = name || 'Unnamed';
    const dogAgeAndRaceText = `${dogAgeText} ${dogRaceText}`;

    const isMale = gender === GENDERS_SELECT_PROPERTIES[0].value;

    return (
        <Card imageUrl={image} onClick={onClick} {...props}>
            <DogDataContentWrapper>
                <DogName>{dogNameText}</DogName>
                <Text>{dogAgeAndRaceText}</Text>
                <IconsContainer>
                    {isVaccinated && (
                        <Icon
                            icon={<VaccinatedIcon />}
                            tooltipText="Vaccinated"
                        />
                    )}
                    {isDesexed && (
                        <Icon
                            icon={<DesexedIcon />}
                            tooltipText="Desexed"
                            paddingLeft="5px"
                        />
                    )}
                    {gender && (
                        <Icon
                            icon={isMale ? <MaleIcon /> : <FemaleIcon />}
                            tooltipText={isMale ? `Male` : `Female`}
                        />
                    )}
                </IconsContainer>
                {children}
            </DogDataContentWrapper>
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
    name: COMPONENTS_CONTENT.DOG_CARD.DEFAULT_NAME,
    onClick: undefined,
    race: undefined,
};
