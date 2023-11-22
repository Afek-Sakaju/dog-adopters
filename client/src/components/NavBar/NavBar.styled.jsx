import { styled } from '@mui/material/styles';

import {
    Button as MyButton,
    AppBar as MyAppBar,
    Avatar as MyAvatar,
} from '@base-components';

export const NavButton = styled(MyButton, {
    shouldForwardProp: (prop) =>
        prop !== 'invertColors' && prop !== 'isSelected',
})(({ invertColors, isSelected }) => ({
    width: '100px',
    padding: '4px 0',
    borderRadius: '10px',
    fontSize: '1em',
    fontWeight: 'bold',
    textTransform: 'none',
    marginLeft: 'auto',

    ...(invertColors ? { color: '#1976d2' } : { color: 'white' }),
    ...(invertColors && { backgroundColor: 'white' }),
    ...(invertColors
        ? { outline: '#1976d2 1px solid' }
        : { outline: '#0959a9 1px solid' }),

    '&:hover': {
        ...(invertColors
            ? { backgroundColor: '#81b8f03a' }
            : { backgroundColor: '#185ca0' }),
    },

    ...(isSelected && {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-17px',
            left: '0',
            width: '100%',
            height: '3px',
            backgroundColor: '#185ca0',
        },
    }),
}));

export const AppBar = styled(MyAppBar)`
    background-color: white;
`;

export const Avatar = styled(MyAvatar)``;

export const NavLogo = styled('img')`
    width: 124px;
    height: 70px;
`;
