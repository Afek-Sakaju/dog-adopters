import React from 'react';
import PropTypes from 'prop-types';

import { MUI_PLACEMENTS } from '@utils';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MuiDrawer,
} from './Drawer.styled';

export default function Drawer({
  anchor,
  itemsList,
  onClose,
  onOpen,
  open,
  variant,
  children,
  ...props
}) {
  return (
    <MuiDrawer
      anchor={anchor}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      variant={variant}
      {...props}
    >
      <List>
        {itemsList?.map(({ name, icon }, i) => (
          <ListItem key={i}>
            <ListItemButton>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              {name ? <ListItemText primary={name} /> : null}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {children ? (
        <List>
          <ListItem>{children}</ListItem>
        </List>
      ) : null}
    </MuiDrawer>
  );
}

Drawer.propTypes = {
  anchor: PropTypes.oneOf(MUI_PLACEMENTS),
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    })
  ),
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  variant: PropTypes.oneOf(['temporary', 'permanent', 'persistent']),
};

Drawer.defaultProps = {
  anchor: 'left',
  itemsList: [],
  onClose: undefined,
  onOpen: undefined,
  open: undefined,
  variant: 'temporary',
};
