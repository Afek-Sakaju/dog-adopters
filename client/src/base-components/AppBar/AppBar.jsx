import React from 'react';
import PropTypes from 'prop-types';

import { MuiAppBar, Toolbar, Typography } from './AppBar.styled';

export default function AppBar({ label, position, color, children, ...props }) {
  return (
    <MuiAppBar position={position} color={color} {...props}>
      <Toolbar>
        {label ? <Typography variant="h6">{label}</Typography> : null}
        {children}
      </Toolbar>
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  label: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string,
};

AppBar.defaultProps = {
  label: undefined,
  position: undefined,
  color: 'primary',
};
