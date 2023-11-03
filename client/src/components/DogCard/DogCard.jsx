import React from 'react';
import PropTypes from 'prop-types';

import {
    DOG_CARD_CONTENT,
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
        <Text>And {DOG_CARD_CONTENT.ADOPTED_TEXT}</Text>
    ) : (
        <InlineTextContainer>
            <Text>And </Text>
            <Text isBoldText>{DOG_CARD_CONTENT.NOT_ADOPTED_TEXT}</Text>
        </InlineTextContainer>
    );

    return (
        <Card imageUrl={image} {...props}>
            <MainInformationText>{mainInfoText}</MainInformationText>
            {race && <Text>{dogRaceText}</Text>}
            {adoptionTextComponent}
            {(isDesexed || isVaccinated) && (
                <InlineTextWrapper>
                    {isVaccinated && (
                        <LabeledIconBox>
                            <Text>{DOG_CARD_CONTENT.IS_VACCINATED_TEXT}</Text>
                            <VaccinatedIcon />
                        </LabeledIconBox>
                    )}
                    {isDesexed && (
                        <LabeledIconBox>
                            <Text>{DOG_CARD_CONTENT.IS_DESEXED_TEXT}</Text>
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
    name: DOG_CARD_CONTENT.DEFAULT_NAME,
    onClick: undefined,
    race: undefined,
};
