import React from 'react';
import PropTypes from 'prop-types';

import {
    COMPONENTS_CONTENT,
    GENDERS_SELECT_PROPERTIES,
    getDogFullSummaryText,
    getDogRaceText,
} from '@utils';
import {
    Card,
    DesexedIcon,
    FemaleIcon,
    InlineTextContainer,
    IconsContainer,
    MainInformationText,
    MaleIcon,
    Text,
    VaccinatedIcon,
    Icon,
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
    const mainInfoText = getDogFullSummaryText(name, age);
    const dogRaceText = getDogRaceText(race);

    const isMale = gender === GENDERS_SELECT_PROPERTIES[0].value;

    const adoptionTextComponent = isAdopted ? (
        <Text>And {COMPONENTS_CONTENT.DOG_CARD.ADOPTED}</Text>
    ) : (
        <InlineTextContainer>
            <Text>And </Text>
            <Text isBoldText>{COMPONENTS_CONTENT.DOG_CARD.NOT_ADOPTED}</Text>
        </InlineTextContainer>
    );

    return (
        <Card imageUrl={image} onClick={onClick} {...props}>
            <MainInformationText>{mainInfoText}</MainInformationText>
            {race ? (
                <Text>{dogRaceText}</Text>
            ) : (
                COMPONENTS_CONTENT.DOG_CARD.RACE_PLACEHOLDER
            )}
            <IconsContainer>
                {isVaccinated && (
                    <Icon icon={<VaccinatedIcon />} tooltipText="Vaccinated" />
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
                        tooltipText={
                            isMale ? `Male (${age})` : `Female (${age})`
                        }
                    />
                )}
            </IconsContainer>
            {adoptionTextComponent}
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
    name: COMPONENTS_CONTENT.DOG_CARD.DEFAULT_NAME,
    onClick: undefined,
    race: undefined,
};
