import React, { useState } from 'react';

import { ToggleVisibility } from '@base-components';
import { PasswordInput } from './PasswordField.styled';

export default function PasswordField({  ...props }) {
  const [isHidden, setIsHidden] = useState(true);

  const onToggleHandler = () => {
    setIsHidden(!isHidden);
  };

  return (
    <PasswordInput
      isHidden={isHidden}
      endCmp={
        <ToggleVisibility isHidden={isHidden} onToggle={onToggleHandler} />
      }
      {...props}
    />
  );
}
