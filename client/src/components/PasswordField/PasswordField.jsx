import React, { useState } from 'react';

import {
  PasswordInput,
  InvisibleIcon,
  VisibleIcon,
} from './PasswordField.styled';

export default function PasswordField({ hideByDefault, ...props }) {
  const [isHidden, setIsHidden] = useState(hideByDefault);

  const onToggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <PasswordInput
      variant="outlined"
      label="Password"
      type={isHidden ? 'password' : 'text'}
      required
      endCmp={
        isHidden ? (
          <InvisibleIcon onClick={onToggleVisibility} />
        ) : (
          <VisibleIcon onClick={onToggleVisibility} />
        )
      }
      {...props}
    />
  );
}
