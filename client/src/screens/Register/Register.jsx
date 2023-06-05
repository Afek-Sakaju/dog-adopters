import React, { useState } from 'react';

import { RegisterForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Register.styled';

export default function Register() {
  const [userData, setUserData] = useState({});
  /* Just sample to know which alert should appear
  later will be used by actual HTTP code response */
  const serverResponse = 200;

  return (
    <PageContainer>
      <RegisterForm onSubmit={(data) => setUserData(data)} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        open={userData?.length}
      >
        {serverResponse === 500 ? (
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
