import React from 'react';
import PropTypes from 'prop-types';

import { MUI_VARIANTS, MUI_DRAWER_PLACEMENTS } from '@utils';
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
            {children ? (
                <Box sx={childrenListStyle}>{children}</Box>
            ) : (
                <List>
                    {itemsList.map(({ name, icon }, i) => (
                        <ListItem key={i} sx={itemsListStyle}>
                            <ListItemButton>
                                {icon ? (
                                    <ListItemIcon>{icon}</ListItemIcon>
                                ) : null}
                                {name ? <ListItemText primary={name} /> : null}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
        </MuiDrawer>
    );
}

Drawer.propTypes = {
    anchor: PropTypes.oneOf(MUI_DRAWER_PLACEMENTS),
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
    variant: PropTypes.oneOf(MUI_VARIANTS.DRAWER),
};

Drawer.defaultProps = {
    anchor: MUI_DRAWER_PLACEMENTS[0],
    childrenListStyle: {},
    itemsList: [],
    itemsListStyle: {},
    onClose: undefined,
    onOpen: undefined,
    open: undefined,
    variant: MUI_VARIANTS.DRAWER[0],
};
