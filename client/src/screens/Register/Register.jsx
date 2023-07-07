import React, { useMemo, useState } from 'react';

import { RegisterForm } from '@components';
import { Alert, Snackbar, PageContainer } from './Register.styled';

export default function Register() {
  const [userData, setUserData] = useState(null);
  const [responseState, setResponseState] = useState(0);

  const alert = useMemo(() => {
    switch (responseState) {
      case 1:
        return <Alert severity="success">Registered successfully</Alert>;
      case -1:
        return (
          <Alert severity="error">
            Registration failed, try another username.
          </Alert>
        );
      default:
        return null;
    }
  }, [responseState]);

  return (
    <PageContainer>
      <RegisterForm
        onSubmit={(data) => setUserData(data)}
        setResponseState={setResponseState}
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => setResponseState(0)}
        open={responseState !== 0}
      >
        {alert}
      </Snackbar>
    </PageContainer>
  );
}
