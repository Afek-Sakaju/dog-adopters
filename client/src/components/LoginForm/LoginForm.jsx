/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { userSchema } from '@validations';
import { TITLES, COMPONENTS_CONTENT } from '@utils';
import {
    Button,
    PasswordField,
    TextField,
    Paper,
    Title,
    Text,
    Link,
} from './LoginForm.styled';

const LoginForm = (props) => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;

    return (
        <Paper variant="elevation" elevation={7}>
            <Title>{TITLES.LOGIN_PAGE}</Title>
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
                {COMPONENTS_CONTENT.LOGIN_PAGE_SIGNUP_REDIRECT}
                <Link href="/register" underline="hover">
                    {COMPONENTS_CONTENT.AUTH_PAGES_REDIRECT_LINK}
                </Link>
            </Text>
            <Button
                label="Login"
                sx={{ padding: '0.7em' }}
                fullWidth
                onClick={() => handleSubmit()}
            />
        </Paper>
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
