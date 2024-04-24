import type { FormikErrors, FormikTouched } from 'formik';
import { withFormik } from 'formik';
import type { ChangeEvent, ReactNode } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { User } from '@/types';
import { APP_PATHS, COMPONENTS_CONTENT, PAGES_TITLES } from '@/utils';
import { userSchema } from '@/validations';
import {
    FormContainer,
    FormTitle,
    Link,
    PasswordField,
    SubmitButton,
    Text,
    TextField,
} from './LoginForm.styled';

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

    const signUpRedirectClickHandler = () => navigate(APP_PATHS.REGISTER);

    return (
        <FormContainer variant="elevation" elevation={7}>
            <FormTitle>{PAGES_TITLES.LOGIN}</FormTitle>
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
                {COMPONENTS_CONTENT.AUTH_FORM.SIGN_UP_REDIRECT}
                <Link onClick={signUpRedirectClickHandler} underline="hover">
                    {COMPONENTS_CONTENT.AUTH_FORM.REDIRECT_LINK}
                </Link>
            </Text>
            <SubmitButton
                label="Login"
                sx={{ padding: '0.7em' }}
                fullWidth
                onClick={() => handleSubmit()}
            />
        </FormContainer>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        // Todo: remove later
        username: 'afeksa22',
        password: 'afeksa22',
        //	username: '',
        //	password: '',
    }),
    validationSchema: userSchema,

    handleSubmit: async (values, { props }: { props: LoginFormProps }) => {
        props.onSubmit(values, props.resetForm);
    },

    displayName: 'LoginForm',
})(LoginForm);
