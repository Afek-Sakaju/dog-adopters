import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItemText from '@mui/material/ListItemText';
import MuiInboxIcon from '@mui/icons-material/MoveToInbox';

export const MuiDrawer = styled(Drawer)``;

export const List = MuiList;

export const ChildrenListItem = styled(MuiListItem)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = MuiListItem;

export const ListItemButton = MuiListItemButton;

export const ListItemIcon = MuiListItemIcon;

export const ListItemText = MuiListItemText;

export const InboxIcon = MuiInboxIcon;
