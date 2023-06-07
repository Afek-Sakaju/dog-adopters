import React, { useState } from 'react';

import { LoginForm } from '@components';
import { Alert, PageContainer, Snackbar } from './Login.styled';

export default function Login() {
  const [userData, setUserData] = useState({});
  // Just for demonstration, will be used with API request result
  const responseCode = 500;

  return (
    <PageContainer>
      <LoginForm onSubmit={(data) => setUserData(data)} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={responseCode}
      >
        {responseCode === 500 ? (
          <Alert severity="error">Login failed</Alert>
        ) : (
          <Alert severity="success">Logged in successfully</Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
