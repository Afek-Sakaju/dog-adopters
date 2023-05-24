import React from 'react';
import PropTypes from 'prop-types';

import { MuiAppBar, Toolbar, Box, Typography } from './AppBar.styled';

export default function AppBar({
  children,
  color,
  endCmp,
  label,
  position,
  startCmp,
  ...props
}) {
  return (
    <MuiAppBar color={color} position={position} {...props}>
      <Toolbar>
        <Box>
          {startCmp}
          {label ? <Typography variant="h6">{label}</Typography> : null}
        </Box>
        <Box>
          {children}
          {endCmp}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  color: PropTypes.string,
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  position: PropTypes.string,
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

AppBar.defaultProps = {
  color: 'primary',
  endCmp: undefined,
  label: undefined,
  position: undefined,
  startCmp: undefined,
};
