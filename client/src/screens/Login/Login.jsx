import React, { useState } from 'react';

import { LoginForm } from '@components';
import { Alert, PageContainer, Snackbar } from './Login.styled';

export default function Login() {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log('isLoggedIn', isLoggedIn);
  return (
    <PageContainer>
      <LoginForm
        onSubmit={(data) => setUserData(data)}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => {
          setUserData(null);
          setIsLoggedIn(false);
        }}
        open={userData !== null}
      >
        {isLoggedIn ? (
          <Alert severity="success">Logged in successfully</Alert>
        ) : (
          <Alert severity="error">Invalid username or password</Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
