import React, { useState } from 'react';

import ToggleVisibility from '../ToggleVisibility';

export default {
  title: 'components/ToggleVisibility',
  decorators: [
    (Story) => (
      <div
        style={{
          width: '800px',
          height: '800px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: ToggleVisibility,
};

export const Default = () => <ToggleVisibility />;

export const Toggle = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <ToggleVisibility
      isHidden={isHidden}
      onToggle={() => setIsHidden(!isHidden)}
    />
  );
};
