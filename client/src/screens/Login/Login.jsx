import React from 'react';

import { TextField, PasswordField, Button } from '@base-components';
import { Paper, Title, Box, ColumnBox, Text, Link } from './Login.styled';

export default function Login() {
  return (
    <Paper variant="elevation" elevation={7}>
      <Title label="Sign In" />
      <ColumnBox>
        <TextField label="Username" />
        <PasswordField label="Password" />
      </ColumnBox>
      <ColumnBox>
        <Box>
          <Text label="Don't have an account yet ?" />
          <Link href="http://localhost:3030/register" underline="hover">
            click here
          </Link>
        </Box>
        <Button label="Login" sx={{ padding: '0.7em' }} fullWidth />
      </ColumnBox>
    </Paper>
  );
}
