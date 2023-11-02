import React from 'react';

import { DogsDataFilterForm } from '@components';
import { PageContainer } from './DogsList.styled';

export default function DogsList() {
    return (
        <PageContainer>
            <DogsDataFilterForm />
        </PageContainer>
    );
}
