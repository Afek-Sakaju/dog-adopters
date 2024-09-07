import React, { type ReactNode } from 'react';

import {
    FormContainer,
    MainContentWrapper,
    Divider,
    FormTitle,
    SubmitButton,
} from './AuthForm.styled';

interface AuthFormProps {
    title: string;
    submitButtonText: string;
    onSubmit: () => void;
    children: ReactNode;
    navigationLinkComponent?: ReactNode;
}

const AuthForm = ({
    title,
    children,
    navigationLinkComponent,
    onSubmit,
    submitButtonText,
}: AuthFormProps): ReactNode => {
    return (
        <FormContainer variant="elevation" elevation={0}>
            {navigationLinkComponent}
            <MainContentWrapper>
                <FormTitle>{title}</FormTitle>
                <Divider />
                {children}
                <SubmitButton
                    fullWidth
                    label={submitButtonText}
                    onClick={onSubmit}
                    sx={{ padding: '0.7em' }}
                />
            </MainContentWrapper>
        </FormContainer>
    );
};

export default AuthForm;
