import React, { useEffect, useState } from 'react';

import { LoginForm } from '@components';
import { AuthProxy } from '@proxies';
import { Alert, PageContainer, Snackbar } from './Login.styled';

export default function Login() {
  const [userData, setUserData] = useState(null);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const res = AuthProxy.loginUser(userData)
      .then((responseData) => responseData)
      .catch((e) => console.log(e));
    setResponse(res);
  }, [userData]);

  return (
    <PageContainer>
      <LoginForm onSubmit={(data) => setUserData(data)} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={response}
      >
        {response === 500 ? (
          <Alert severity="error">Login failed</Alert>
        ) : (
          <Alert severity="success">Logged in successfully</Alert>
        )}
      </Snackbar>
    </PageContainer>
  );
}
