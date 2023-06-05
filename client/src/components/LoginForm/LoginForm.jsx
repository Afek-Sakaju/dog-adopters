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
} from './LoginForm.styled';

const LoginForm = (props) => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    props;

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
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: userSchema,

  handleSubmit: (values, { props, resetForm }) => {
    const data = { username: values.username, password: values.password };

    props?.onSubmit(data);
    resetForm();
  },

  displayName: 'LoginForm',
})(LoginForm);
