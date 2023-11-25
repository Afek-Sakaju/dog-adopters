/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { userSchema } from '@validations';
import { APP_PATHS, COMPONENTS_CONTENT, PAGES_TITLES } from '@utils';
import {
    Button,
    PasswordField,
    TextField,
    FormContainer,
    FormTitle,
    Text,
    Link,
} from './LoginForm.styled';

const LoginForm = (props) => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;
    const navigate = useNavigate();

    const signUpRedirectClickHandler = () => navigate(APP_PATHS.REGISTER);

    return (
        <FormContainer variant="elevation" elevation={7}>
            <FormTitle>{PAGES_TITLES.LOGIN}</FormTitle>
            <TextField
                error={errors.username && touched.username}
                helperText={touched.username ? errors.username : ''}
                label="Username"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                value={values.username}
            />
            <PasswordField
                error={errors.password && touched.password}
                helperText={touched.password ? errors.password : ''}
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
            />
            <Text>
                {COMPONENTS_CONTENT.AUTH_FORM.SIGN_UP_REDIRECT}
                <Link onClick={signUpRedirectClickHandler}>
                    {COMPONENTS_CONTENT.AUTH_FORM.REDIRECT_LINK}
                </Link>
            </Text>
            <Button
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
