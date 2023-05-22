import React from 'react';

import { EmailInput } from './EmailField.styled';

export default function EmailField({ ...props }) {
  return (
    <EmailInput
      variant="outlined"
      type="text"
      label="Email address"
      required
      {...props}
    />
  );
}
