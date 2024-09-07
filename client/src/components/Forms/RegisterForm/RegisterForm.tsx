import type { ChangeEvent, ReactNode } from 'react';
import React from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import type { FormikErrors, FormikTouched } from 'formik';
import { withFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import type { User } from '@/types';
import { userSchema } from '@/validations';
import { APP_PATHS } from '@/utils';
import {
    NavigationLink,
    NavigationText,
    PasswordField,
    TextField,
} from '../AuthForm/AuthForm.styled';
import AuthForm from '../AuthForm/AuthForm';

interface RegisterFormProps {
    handleSubmit?: () => void;
    // eslint-disable-next-line react/no-unused-prop-types
    resetForm?: () => void;
    errors?: FormikErrors<User>;
    touched?: FormikTouched<User>;
    handleBlur?: (event: ChangeEvent) => void;
    handleChange?: (event: ChangeEvent) => void;
    // eslint-disable-next-line react/no-unused-prop-types
    onSubmit?: (values: User, onSuccess: () => void) => void;
    values?: User;
    [key: string]: unknown;
}

const RegisterForm = (props: RegisterFormProps): ReactNode => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;
    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    return (
        <AuthForm
            title={t('titles.register')}
            navigationLinkComponent={
                <NavigationText>
                    {t('components.auth_form.redirect_to_login_message')}
                    <NavigationLink
                        onClick={() => navigate(APP_PATHS.login)}
                        underline="hover"
                    >
                        {t('components.auth_form.redirect_to_login_link')}
                    </NavigationLink>
                </NavigationText>
            }
            submitButtonText={t('components.auth_form.register')}
            onSubmit={handleSubmit}
        >
            <TextField
                error={errors.fullName && touched.fullName}
                helperText={
                    touched.fullName && errors.fullName ? errors.fullName : ' '
                }
                label="Full name"
                name="fullName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
            />
            <TextField
                error={errors.phoneNumber && touched.phoneNumber}
                helperText={
                    touched.phoneNumber && errors.phoneNumber
                        ? errors.phoneNumber
                        : ' '
                }
                label="Phone number"
                name="phoneNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
            />
            <TextField
                error={errors.username && touched.username}
                helperText={
                    touched.username && errors.username ? errors.username : ' '
                }
                label="Username"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.username}
            />
            <PasswordField
                error={errors.password && touched.password}
                helperText={
                    touched.password && errors.password ? errors.password : ' '
                }
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
            />
        </AuthForm>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        fullName: '',
        phoneNumber: '',
        username: '',
        password: '',
    }),
    validationSchema: userSchema,

    handleSubmit: async (
        values: User,
        { props }: { props: RegisterFormProps }
    ) => {
        const trimmedFullName = values.fullName.trim();
        props?.onSubmit(
            { ...values, fullName: trimmedFullName },
            props.resetForm
        );
    },

    displayName: 'RegisterForm',
})(RegisterForm);
