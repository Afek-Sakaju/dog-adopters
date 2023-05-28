import React from 'react';
import PropTypes from 'prop-types';

import { MUI_PLACEMENTS } from '@utils';
import {
  List,
  ListItem,
  ChildrenListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MuiDrawer,
} from './Drawer.styled';

export default function Drawer({
  anchor,
  childrenListStyle,
  itemsListStyle,
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
      {...props}
      anchor={anchor}
      childrenListStyle={childrenListStyle}
      itemsListStyle={itemsListStyle}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      variant={variant}
    >
      <List>
        {itemsList?.map(({ name, icon }, i) => (
          <ListItem key={i} sx={itemsListStyle}>
            <ListItemButton>
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              {name ? <ListItemText primary={name} /> : null}
            </ListItemButton>
          </ListItem>
        ))}
        {children ? (
          <ChildrenListItem sx={childrenListStyle}>{children}</ChildrenListItem>
        ) : null}
      </List>
    </MuiDrawer>
  );
}

Drawer.propTypes = {
  anchor: PropTypes.oneOf(MUI_PLACEMENTS),
  childrenListStyle: PropTypes.oneOfType([PropTypes.object]),
  itemsListStyle: PropTypes.oneOfType([PropTypes.object]),
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
  childrenListStyle: {},
  itemsListStyle: {},
  itemsList: [],
  onClose: undefined,
  onOpen: undefined,
  open: undefined,
  variant: 'persistent',
};
