import React, { useState } from 'react';

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
} from './Login.styled';

export default function Login() {
  // Will change that to Formik usage later
  const [invalidLogin, setInvalidLogin] = useState(false);
  // If you want to see the Snackbar alert for visual check, change to true.
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Paper variant="elevation" elevation={7}>
      <Title>Sign In</Title>
      <TextField label="Username" />
      <PasswordField label="Password" />
      <Text>
        {"Don't have an account yet ? "}
        <Link href="http://localhost:3030/register" underline="hover">
          click here
        </Link>
      </Text>
      <Button label="Login" sx={{ padding: '0.7em' }} fullWidth />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => {
          setIsSubmitted(false);
          setInvalidLogin(false);
        }}
        open={isSubmitted}
      >
        <Alert severity={invalidLogin ? 'error' : 'success'}>
          {invalidLogin
            ? 'Invalid username or password'
            : 'Logged in successfully, you are being redirected...'}
        </Alert>
      </Snackbar>
    </Paper>
  );
}
