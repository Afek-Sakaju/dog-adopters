import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiList from '@mui/material/List';
import MuiBox from '@mui/material/Box';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';
import MuiInboxIcon from '@mui/icons-material/MoveToInbox';

export const MuiDrawer = styled(Drawer)``;

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
