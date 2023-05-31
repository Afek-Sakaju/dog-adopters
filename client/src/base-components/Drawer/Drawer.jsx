import React from 'react';
import PropTypes from 'prop-types';

import { MUI_PLACEMENTS } from '@utils';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MuiDrawer,
} from './Drawer.styled';

export default function Drawer({
  anchor,
  children,
  childrenListStyle,
  itemsList,
  itemsListStyle,
  onClose,
  onOpen,
  open,
  variant,
  ...props
}) {
  return (
    <MuiDrawer
      anchor={anchor}
      childrenListStyle={childrenListStyle}
      itemsListStyle={itemsListStyle}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      variant={variant}
      {...props}
    >
      {itemsList?.length ? (
        <List>
          {itemsList.map(({ name, icon }, i) => (
            <ListItem key={i} sx={itemsListStyle}>
              <ListItemButton>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                {name ? <ListItemText primary={name} /> : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : null}
      {children ? <Box sx={childrenListStyle}>{children}</Box> : null}
    </MuiDrawer>
  );
}

Drawer.propTypes = {
  anchor: PropTypes.oneOf(MUI_PLACEMENTS),
  // eslint-disable-next-line react/forbid-prop-types
  childrenListStyle: PropTypes.object,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    })
  ),
  // eslint-disable-next-line react/forbid-prop-types
  itemsListStyle: PropTypes.object,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  variant: PropTypes.oneOf(['temporary', 'permanent', 'persistent']),
};

Drawer.defaultProps = {
  anchor: 'left',
  childrenListStyle: {},
  itemsList: [],
  itemsListStyle: {},
  onClose: undefined,
  onOpen: undefined,
  open: undefined,
  variant: 'persistent',
};
