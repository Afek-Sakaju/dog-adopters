import { Theme, styled } from '@mui/material/styles';
import {
    AddRounded as MuiAddIcon,
    Pets as MuiPetIcon,
} from '@mui/icons-material';

import {
    Button as MyButton,
    AppBar as MyAppBar,
    Avatar as MyAvatar,
} from '@/base-components';

interface NavButtonProps {
    isIconButton?: boolean;
    isSelected?: boolean;
    invertColors?: boolean;
    theme?: Theme;
    [key: string]: unknown;
}

export const NavButton = styled(MyButton, {
    shouldForwardProp: (prop: string) =>
        !['isIconButton', 'invertColors', 'isSelected'].includes(prop),
})(({ invertColors, isSelected, isIconButton, theme }: NavButtonProps) => ({
    ...(isIconButton ? { width: '70px' } : { width: '100px' }),
    height: '38px',
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

    [theme.breakpoints.down('lg')]: {
        ...(isIconButton ? { width: '60px' } : { width: '90px' }),
    },

    [theme.breakpoints.down('sm')]: {
        ...(isIconButton ? { width: '43px' } : { width: '55px' }),
        minWidth: '30px',
        height: '30px',
        fontSize: '0.65em',

        ...(isSelected && {
            '&::after': {
                bottom: '-13px',
                height: '2px',
            },
        }),
    },
}));

export const DogIcon = styled(MuiPetIcon)`
    font-size: 1.8em;
`;

export const AddIcon = styled(MuiAddIcon)`
    font-size: 1.6em;
`;

export const AppBar = styled(MyAppBar)`
    overflow-y: hidden;
    background-color: white;
    border-bottom: 10px solid #f2ab60;
`;

export const Avatar = styled(MyAvatar)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '30px',
        height: '30px',
    },
}));

export const NavLogo = styled('img')(({ theme }) => ({
    width: '124px',
    height: '70px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
        transform: 'scale(1.05)',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '56px',
    },
}));
