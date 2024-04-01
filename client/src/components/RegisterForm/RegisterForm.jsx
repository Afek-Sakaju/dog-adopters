/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { userSchema } from '#validations';
import { APP_PATHS, COMPONENTS_CONTENT, PAGES_TITLES } from '#utils';
import {
    SubmitButton,
    PasswordField,
    TextField,
    FormContainer,
    FormTitle,
    Text,
    Link,
} from './RegisterForm.styled';

const RegisterForm = (props) => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;

    const navigate = useNavigate();

    const signInRedirectClickHandler = () => navigate(APP_PATHS.LOGIN);

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
                    {COMPONENTS_CONTENT.AUTH_FORM.REDIRECT_LINK}
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

    handleSubmit: async (values, { props, resetForm }) => {
        props?.onSubmit(values, resetForm);
    },

    displayName: 'RegisterForm',
})(RegisterForm);
