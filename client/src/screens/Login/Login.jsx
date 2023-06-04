/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';
import { userSchema } from '@src/validations';

import {
  Button,
  PasswordField,
  TextField,
  Paper,
  Title,
  Text,
  Link,
  Alert,
  Snackbar,
  PageContainer,
} from './Login.styled';

const Login = (props) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    values,
  } = props;

  return (
    <PageContainer>
      <Paper variant="elevation" elevation={7}>
        <Title>Sign In</Title>
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
          helperText={touched.username ? errors.password : ''}
          label="Password"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
        />
        <Text>
          {"Don't have an account yet ? "}
          <Link href="http://localhost:3030/register" underline="hover">
            click here
          </Link>
        </Text>
        <Button
          label="Login"
          sx={{ padding: '0.7em' }}
          fullWidth
          onClick={() => handleSubmit()}
        />
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isSubmitting}
      >
        {errors ? (
          <Alert severity="error">Login failed</Alert>
        ) : (
          <Alert severity="success">Logged in successfully</Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
    invalidLogin: false,
    submitAlertShowTime: 2000,
  }),
  validationSchema: userSchema,

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    values.response = 'hey';
    setTimeout(() => {
      setSubmitting(false);

      setTimeout(() => {
        if (values.errors.length) resetForm();
      }, 100);
    }, values.submitAlertShowTime);
  },

  displayName: 'Login',
})(Login);
