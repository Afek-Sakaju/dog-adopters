import React, { type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Page,
    Text,
    TextSection,
    Title,
} from './AboutUsPage.styled';

export default function AboutUsPage(): ReactNode {
    const { t } = useTranslation();

    return (
        <Page className="custom-scrollbar">
            <TextSection>
                <Title>{t('about_us.who_are_we.title')}</Title>
                <Text>{t('about_us.who_are_we.content')}</Text>
            </TextSection>
            <TextSection>
                <Title>{t('about_us.our_mission.title')}</Title>
                <Text>{t('about_us.our_mission.content')}</Text>
            </TextSection>
            <TextSection>
                <Title>{t('about_us.future_plans.title')}</Title>
                <Text>{t('about_us.future_plans.content')}</Text>
            </TextSection>
            <TextSection>
                <Title>{t('about_us.key_features.title')}</Title>
                <Text>{t('about_us.key_features.content')}</Text>
            </TextSection>
            <TextSection>
                <Title>{t('about_us.the_creator.title')}</Title>
                <Text>{t('about_us.the_creator.content')}</Text>
            </TextSection>
        </Page>
    );
}
