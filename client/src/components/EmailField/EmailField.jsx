import React from 'react';

import { EmailInput } from './EmailField.styled';

export default function EmailField({ ...props }) {
  return <EmailInput type="text" label="Email address" required {...props} />;
}
