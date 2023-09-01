/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { userSchema } from '@validations';
import {
    Button,
    PasswordField,
    TextField,
    Paper,
    Title,
    Text,
    Link,
} from './RegisterForm.styled';

const RegisterForm = (props) => {
    const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
        props;

    return (
        <Paper variant="elevation" elevation={7}>
            <Title>Sign Up</Title>
            <TextField
                error={errors.fullName && touched.fullName}
                helperText={touched.fullName ? errors.fullName : ''}
                label="Full name"
                name="fullName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
            />
            <TextField
                error={errors.phoneNumber && touched.phoneNumber}
                helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                label="Phone number"
                name="phoneNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
            />
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
                {'Already have an account ? '}
                <Link href="/login" underline="hover">
                    click here
                </Link>
            </Text>
            <Button
                fullWidth
                label="Register"
                onClick={() => handleSubmit()}
                sx={{ padding: '0.7em' }}
            />
        </Paper>
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
