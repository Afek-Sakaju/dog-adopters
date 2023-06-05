import React, { useState } from 'react';

import { RegisterForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Register.styled';

export default function Register() {
  const [userData, setUserData] = useState({});
  // Just for demonstration, will be used with API request result
  const goodResponse = true;

  return (
    <PageContainer>
      <RegisterForm onSubmit={(data) => setUserData(data)} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        open={goodResponse}
      >
        {goodResponse ? (
          <Alert severity="error">Registration failed</Alert>
        ) : (
          <Alert severity="success">
            Registered successfully, you are being redirected...
          </Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
