import type { ChangeEvent, ReactNode } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormikErrors, FormikTouched } from 'formik';
import { withFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import type { User } from '@/types';
import { APP_PATHS } from '@/utils';
import { userSchema } from '@/validations';
import { PasswordField, Text, TextField, Link } from './LoginForm.styled';
import AuthForm from '../AuthForm/AuthForm';

interface LoginFormProps {
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

const LoginForm = (props: LoginFormProps): ReactNode => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <AuthForm
            title={t('titles.login')}
            navigationLinkComponent={
                <Text>
                    {t('components.auth_form.redirect_to_register_message')}
                    <Link onClick={() => navigate(APP_PATHS.register)} underline="hover">
                        {t('components.auth_form.redirect_to_register_link')}
                    </Link>
                </Text>
            }
            submitButtonText={t('components.auth_form.sign_in')}
            onSubmit={handleSubmit}
        >
            <TextField
                error={errors.username && touched.username}
                helperText={touched.username && errors.username ? errors.username : ' '}
                label="Username"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.username}
            />
            <PasswordField
                error={errors.password && touched.password}
                helperText={touched.password && errors.password ? errors.password : ' '}
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
        username: '',
        password: '',
    }),
    validationSchema: userSchema,

    handleSubmit: async (values, { props }: { props: LoginFormProps }) => {
        props.onSubmit(values, props.resetForm);
    },

    displayName: 'LoginForm',
})(LoginForm);
