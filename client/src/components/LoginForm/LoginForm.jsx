/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';

import { userSchema } from '@validations';
import { AuthProxy } from '@proxies';
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
  const {
    errors,
    handleBlur,
    handleChange,
    // eslint-disable-next-line no-unused-vars
    setIsLoggedIn,
    handleSubmit,
    touched,
    values,
  } = props;

  return (
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
        helperText={touched.password ? errors.password : ''}
        label="Password"
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
      />
      <Text>
        {"Don't have an account yet ? "}
        <Link href="/register" underline="hover">
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
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: userSchema,

  handleSubmit: (values, { props, resetForm }) => {
    const { username, password } = values;
    const data = { username, password };

    AuthProxy.loginUser(data)
      .then((res) => {
        const { status } = res;
        if (status >= 200 && status < 400) props.setIsLoggedIn(true);
      })
      .catch((e) => console.log(e));

    props.onSubmit?.(data);
    resetForm();
  },

  displayName: 'LoginForm',
})(LoginForm);
