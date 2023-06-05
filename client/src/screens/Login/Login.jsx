import React, { useState } from 'react';

import { LoginForm } from '@components';
import { Alert, PageContainer, Snackbar } from './Login.styled';

export default function Login() {
  const [userData, setUserData] = useState({});
  /* Just sample to know which alert should appear
  later will be used by actual HTTP code response */
  const serverResponse = 200;

  console.log(userData);
  return (
    <PageContainer>
      <LoginForm onSubmit={(data) => setUserData(data)} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={userData.length}
      >
        {serverResponse === 500 ? (
          <Alert severity="error">Login failed</Alert>
        ) : (
          <Alert severity="success">Logged in successfully</Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
