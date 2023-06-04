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
  PageContainer,
} from './Register.styled';

export default function Register() {
  // Will change those states to Formik usage later
  const [invalidRegister, setInvalidRegister] = useState(false);
  // If you want to see the Snackbar alert for visual check, change to true.
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <PageContainer>
      <Paper variant="elevation" elevation={7}>
        <Title>Sign Up</Title>
        <TextField label="Full name" />
        <TextField label="Phone number" />
        <TextField label="Username" required />
        <PasswordField label="Password" />
        <Text>
          {'Already have an account ? '}
          <Link href="http://localhost:3030/login" underline="hover">
            click here
          </Link>
        </Text>
        <Button label="Register" sx={{ padding: '0.7em' }} fullWidth />
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => {
          setIsSubmitted(false);
          setInvalidRegister(false);
        }}
        open={isSubmitted}
      >
        {invalidRegister ? (
          <Alert severity="error">Invalid registration data</Alert>
        ) : (
          <Alert severity="success">
            Registered successfully, you are being redirected...
          </Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
