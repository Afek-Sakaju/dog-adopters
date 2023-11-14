import React from 'react';
import PropTypes from 'prop-types';

import {
    COMPONENTS_CONTENT,
    getDogFullSummaryText,
    getDogRaceText,
} from '@utils';
import {
    Card,
    DesexedIcon,
    FemaleIcon,
    InlineTextContainer,
    InlineTextWrapper,
    LabeledIconBox,
    MainInformationText,
    MaleIcon,
    Text,
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
    children,
    ...props
}) {
    const mainInfoText = getDogFullSummaryText(name, age);
    const dogRaceText = getDogRaceText(race);

    const genderIcon =
        gender && (gender === 'Male' ? <MaleIcon /> : <FemaleIcon />);

    const adoptionTextComponent = isAdopted ? (
        <Text>And {COMPONENTS_CONTENT.DOG_CARD_ADOPTED}</Text>
    ) : (
        <InlineTextContainer>
            <Text>And </Text>
            <Text isBoldText>{COMPONENTS_CONTENT.DOG_CARD_NOT_ADOPTED}</Text>
        </InlineTextContainer>
    );

    return (
        <Card imageUrl={image} {...props}>
            <MainInformationText>{mainInfoText}</MainInformationText>
            {race && <Text>{dogRaceText}</Text>}
            {adoptionTextComponent}
            <InlineTextWrapper>
                {isVaccinated && (
                    <LabeledIconBox>
                        <Text>{COMPONENTS_CONTENT.DOG_CARD_IS_VACCINATED}</Text>
                        <VaccinatedIcon />
                    </LabeledIconBox>
                )}
                {isDesexed && (
                    <LabeledIconBox>
                        <Text>{COMPONENTS_CONTENT.DOG_CARD_IS_DESEXED}</Text>
                        <DesexedIcon />
                    </LabeledIconBox>
                )}
            </InlineTextWrapper>
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
    name: COMPONENTS_CONTENT.DOG_CARD_DEFAULT_NAME,
    onClick: undefined,
    race: undefined,
};
