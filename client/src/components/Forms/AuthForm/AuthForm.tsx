import React, { type ReactNode } from 'react';
import {
    FormContainer,
    MainContentWrapper,
    Divider,
    FormTitle,
} from './AuthForm.styled';

interface AuthFormProps {
    title: string;
    children: ReactNode;
    navigationLinkComponent?: ReactNode;
}

const AuthForm = ({
    title,
    children,
    navigationLinkComponent,
}: AuthFormProps): ReactNode => {
    return (
        <FormContainer variant="elevation" elevation={0}>
            {navigationLinkComponent}
            <MainContentWrapper>
                <FormTitle>{title}</FormTitle>
                <Divider />
                {children}
            </MainContentWrapper>
        </FormContainer>
    );
};

export default AuthForm;
