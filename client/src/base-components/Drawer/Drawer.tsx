import type { ChangeEvent, FC, ReactNode } from 'react';
import React from 'react';

import { MuiDrawerPlacement, MuiDrawerVariant } from '@/types';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MuiDrawer,
} from './Drawer.styled';

interface DrawerProps {
    anchor?: MuiDrawerPlacement;
    children?: React.ReactNode;
    childrenListStyle?: React.CSSProperties;
    itemsList?: { name: string; icon?: React.ReactNode | string }[];
    itemsListStyle?: React.CSSProperties;
    onClose?: (event: ChangeEvent) => void;
    onOpen?: (event: ChangeEvent) => void;
    open?: boolean;
    label?: string;
    variant?: MuiDrawerVariant;
}

const Drawer: FC<DrawerProps> = (props): ReactNode => {
    const {
        anchor = 'left',
        children,
        childrenListStyle = {},
        itemsList = [],
        itemsListStyle = {},
        onClose,
        onOpen,
        open,
        label,
        variant = 'persistent',
        ...rest
    } = props;

    return (
        <MuiDrawer
            anchor={anchor}
            // @ts-ignore
            childrenListStyle={childrenListStyle}
            itemsListStyle={itemsListStyle}
            onClose={onClose}
            onOpen={onOpen}
            open={open}
            variant={variant}
            label={label}
            {...rest}
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
};

export default Drawer;
