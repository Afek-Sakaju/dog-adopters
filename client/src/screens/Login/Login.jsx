import React, { useState } from 'react';

import { LoginForm } from '@components';
import { Alert, PageContainer, Snackbar } from './Login.styled';

export default function Login() {
  const [userData, setUserData] = useState({});
  // Just for demonstration, will be used with API request result
  const goodResponse = true;

  return (
    <PageContainer>
      <LoginForm onSubmit={(data) => setUserData(data)} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={goodResponse !== null}
      >
        {goodResponse ? (
          <Alert severity="error">Login failed</Alert>
        ) : (
          <Alert severity="success">Logged in successfully</Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
