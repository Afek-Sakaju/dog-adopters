import React, { useState } from 'react';
import { withFormik, FieldArray } from 'formik';

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
    handleSubmit,
    invalidLogin,
    isSubmitting,
    password,
    username,
    values,
  } = props;

  // Will change that to Formik usage later
  const [invalidLogin, setInvalidLogin] = useState(false);
  // If you want to see the Snackbar alert for visual check, change to true.
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <PageContainer>
      <Paper variant="elevation" elevation={7}>
        <Title>Sign In</Title>
        <TextField
          label="Username"
          value={username}
          onChange={(event) => (values.username = event.target.value)}
        />
        <PasswordField
          label="Password"
          value={password}
          onChange={(event) => (values.password = event.target.value)}
        />
        <Text>
          {"Don't have an account yet ? "}
          <Link href="http://localhost:3030/register" underline="hover">
            click here
          </Link>
        </Text>
        <Button label="Login" sx={{ padding: '0.7em' }} fullWidth />
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => {
          setIsSubmitted(false);
          setInvalidLogin(false);
        }}
        open={isSubmitted}
      >
        {invalidLogin ? (
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
  }),

  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    values.invalidLogin = false;
    setSubmitting(false);
    resetForm();
  },

  displayName: 'WeaponUpgradeForm',
})(Login);
