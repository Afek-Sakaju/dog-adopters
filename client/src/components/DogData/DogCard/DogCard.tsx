import type { FC, ReactNode } from 'react';
import React from 'react';

import {
    GENDERS_SELECT_PROPERTIES,
    getDogAgeText,
    getDogRaceText,
} from '@/utils';
import {
    Card,
    DesexedIcon,
    DogDataContentWrapper,
    DogName,
    FemaleIcon,
    Icon,
    IconsContainer,
    MaleIcon,
    Text,
    VaccinatedIcon,
} from './DogCard.styled';

interface DogCardProps {
    age?: number;
    children?: ReactNode;
    gender?: string;
    image?: string;
    isAdopted?: boolean;
    isDesexed?: boolean;
    isVaccinated?: boolean;
    name?: string;
    onClick?: () => void;
    race?: string;
    [key: string]: unknown;
}

const DogCard: FC<DogCardProps> = (props): ReactNode => {
    const {
        age,
        gender,
        image,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isAdopted,
        isDesexed,
        isVaccinated,
        name,
        onClick,
        race,
        children,
        ...rest
    } = props;
    const dogRaceText: string = getDogRaceText(race);
    const dogAgeText: string = getDogAgeText(age);
    const dogAgeAndRaceText: string = `${dogAgeText} ${dogRaceText}`;

    const isMale: boolean = gender === GENDERS_SELECT_PROPERTIES[0].value;

    return (
        <Card imageUrl={image} onClick={onClick} {...rest}>
            <DogDataContentWrapper>
                <DogName>{name || 'Unnamed'}</DogName>
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
};

export default DogCard;
