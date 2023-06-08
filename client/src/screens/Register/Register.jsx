import React, { useState } from 'react';

import { RegisterForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Register.styled';

export default function Register() {
  const [userData, setUserData] = useState(null);
  // Just for demonstration, will be used with API request result
  const responseCode = 500;

  return (
    <PageContainer>
      <RegisterForm onSubmit={(data) => setUserData(data)} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        open={responseCode}
      >
        {responseCode === 500 ? (
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
