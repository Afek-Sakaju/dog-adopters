import React from 'react';
import PropTypes from 'prop-types';

import { MuiAppBar, Toolbar, Box, Typography } from './AppBar.styled';

export default function AppBar({
  label,
  position,
  color,
  startCmp,
  children,
  ...props
}) {
  return (
    <MuiAppBar position={position} color={color} {...props}>
      <Toolbar>
        <Box>
          {startCmp}
          {label ? <Typography variant="h6">{label}</Typography> : null}
        </Box>
        <Box>{children}</Box>
      </Toolbar>
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  label: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string,
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

AppBar.defaultProps = {
  label: undefined,
  position: undefined,
  color: 'primary',
  startCmp: undefined,
};
