import React, { useState } from 'react';

import { PasswordInput } from './PasswordField.styled';

export default function PasswordField({ ...props }) {
  const [isHidden, setIsHidden] = useState(true);

  return <PasswordInput isHidden={isHidden} {...props} />;
}
