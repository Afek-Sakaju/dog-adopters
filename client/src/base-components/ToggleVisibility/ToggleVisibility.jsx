import React from 'react';
import PropTypes from 'prop-types';

import { EyeIcon } from './ToggleVisibility.styled';

export default function ToggleVisibility({ isHidden, onToggle }) {
  return <EyeIcon onClick={onToggle} isHidden={isHidden} />;
}

ToggleVisibility.propTypes = {
  isHidden: PropTypes.bool,
  onToggle: PropTypes.func,
};

ToggleVisibility.defaultProps = {
  isHidden: true,
  onToggle: undefined,
};
