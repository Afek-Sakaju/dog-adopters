import React, { useState } from 'react';

import { TextField, PasswordField, Button } from '@base-components';
import {
  Paper,
  Title,
  Box,
  ColumnBox,
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
      <Title label="Sign In" />
      <ColumnBox>
        <TextField label="Username" />
        <PasswordField label="Password" />
      </ColumnBox>
      <ColumnBox>
        <Box>
          <Text label="Don't have an account yet ?" />
          <Link href="http://localhost:3030/register" underline="hover">
            click here
          </Link>
        </Box>
        <Button label="Login" sx={{ padding: '0.7em' }} fullWidth />
      </ColumnBox>
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
