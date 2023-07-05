import React, { useState } from 'react';

import { RegisterForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Register.styled';

export default function Register() {
  const [userData, setUserData] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <PageContainer>
      <RegisterForm
        onSubmit={(data) => setUserData(data)}
        setIsRegistered={setIsRegistered}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        open={userData !== null}
      >
        {isRegistered ? (
          <Alert severity="success">
            Registered successfully, you are being redirected...
          </Alert>
        ) : (
          <Alert severity="error">Registration failed</Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
