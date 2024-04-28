import type { ChangeEvent, ReactNode } from 'react';
import React from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import type { FormikErrors, FormikTouched } from 'formik';
import { withFormik } from 'formik';

import type { User } from '@/types';
import { userSchema } from '@/validations';
import { APP_PATHS, COMPONENTS_CONTENT, PAGES_TITLES } from '@/utils';
import {
    FormContainer,
    FormTitle,
    Link,
    PasswordField,
    SubmitButton,
    Text,
    TextField,
} from './RegisterForm.styled';

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

    const navigate: NavigateFunction = useNavigate();

    const signInRedirectClickHandler = (): void => navigate(APP_PATHS.LOGIN);

    return (
        <FormContainer variant="elevation" elevation={7}>
            <FormTitle>{PAGES_TITLES.REGISTER}</FormTitle>
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
            <Text>
                {COMPONENTS_CONTENT.AUTH_FORM.SIGN_IN_REDIRECT}
                <Link onClick={signInRedirectClickHandler} underline="hover">
                    {COMPONENTS_CONTENT.AUTH_FORM.REDIRECT_LOGIN_LINK}
                </Link>
            </Text>
            <SubmitButton
                fullWidth
                label="Register"
                onClick={() => handleSubmit()}
                sx={{ padding: '0.7em' }}
            />
        </FormContainer>
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
