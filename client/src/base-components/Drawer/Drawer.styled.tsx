import { styled } from '@mui/material/styles';
import {
    Drawer,
    Box as MuiBox,
    ListItemButton as MuiListItemButton,
    ListItemIcon as MuiListItemIcon,
    ListItemText as MuiListItemText,
    ListItem as MuiListItem,
    List as MuiList,
} from '@mui/material';
import { MoveToInbox as MuiInboxIcon } from '@mui/icons-material';

export const MuiDrawer = Drawer;

export const List = MuiList;

export const Box = styled(MuiBox)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;

export const ListItem = MuiListItem;

export const ListItemButton = MuiListItemButton;

export const ListItemIcon = MuiListItemIcon;

export const ListItemText = MuiListItemText;

export const InboxIcon = MuiInboxIcon;
