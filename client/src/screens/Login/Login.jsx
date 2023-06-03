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
  const { handleChange, handleSubmit, isSubmitting, values, errors } = props;

  return (
    <PageContainer>
      <Paper variant="elevation" elevation={7}>
        <Title>Sign In</Title>
        <TextField
          label="Username"
          required
          value={values.username}
          onChange={handleChange}
          name="username"
        />
        <PasswordField
          label="Password"
          value={values.password}
          onChange={handleChange}
          name="password"
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
          <Alert severity="error">Invalid username or password</Alert>
        ) : (
          <Alert severity="success">
            Logged in successfully, you are being redirected...
          </Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
};

export default withFormik({
  validateOnMount: false,
  validateOnChange: false,
  enableReinitialize: true,

  mapPropsToValues: () => ({
    username: '',
    password: '',
    invalidLogin: false,
    submitAlertShowTime: 2000,
  }),
  validationSchema: userSchema,

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      setSubmitting(false);

      setTimeout(() => {
        if (values.errors.length) resetForm();
      }, 100);
    }, values.submitAlertShowTime);
  },

  displayName: 'Login',
})(Login);
