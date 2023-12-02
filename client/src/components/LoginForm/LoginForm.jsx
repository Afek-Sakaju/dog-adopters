/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { userSchema } from '@validations';
import { APP_PATHS } from '@utils';
import {
    SubmitButton,
    PasswordField,
    TextField,
    FormContainer,
    FormTitle,
    Text,
    Link,
} from './LoginForm.styled';

const LoginForm = (props) => {
    const {
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        t,
    } = props;
    const navigate = useNavigate();

    const signUpRedirectClickHandler = () => navigate(APP_PATHS.REGISTER);

    return (
        <FormContainer variant="elevation" elevation={7}>
            <FormTitle>{t('login-title')}</FormTitle>
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
                {t('form.sign-up-redirect-text')}
                <Link onClick={signUpRedirectClickHandler} underline="hover">
                    {t('form.sign-up-redirect-link')}
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
        username: '',
        password: '',
    }),
    validationSchema: userSchema,

    handleSubmit: async (values, { props, resetForm }) => {
        props.onSubmit(values, resetForm);
    },

    displayName: 'LoginForm',
})(LoginForm);
