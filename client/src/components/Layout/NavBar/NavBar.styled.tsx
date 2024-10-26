import { type Theme, styled } from '@mui/material/styles';
import {
    type TypographyProps,
    Typography as MuiTypography,
} from '@mui/material';
import {
    AddRounded as MuiAddIcon,
    Pets as MuiPetIcon,
} from '@mui/icons-material';

import { AppBar as MyAppBar, Avatar as MyAvatar } from '@/base-components';
import { MAIN_COLORS } from '@/utils';

export const AppBar = styled(MyAppBar)`
    overflow-y: hidden;
    background-color: ${MAIN_COLORS.bgColor};
    border-bottom: 10px solid ${MAIN_COLORS.primary};
`;

interface NavLinkButton extends TypographyProps {
    theme?: Theme;
    invertColors?: boolean;
    [key: string]: unknown;
}

export const NavLinkButton = styled(MuiTypography, {
    shouldForwardProp: (prop: string) => prop !== 'invertColors',
})<NavLinkButton>`
    height: min-content;
    margin-left: 3px;
    font-size: 0.95rem;
    font-weight: 500;
    color: ${({ invertColors }) => (invertColors ? MAIN_COLORS.primary : MAIN_COLORS.textSecondary)};
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
        color: ${({ invertColors }) => (invertColors ? MAIN_COLORS.textSecondary : MAIN_COLORS.primary)};
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        font-size: 0.85rem;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
        font-size: 0.75rem;
        margin-left: 1.5px;
    }
`;

export const DogIcon = styled(MuiPetIcon)`
    font-size: 1.8em;
`;

export const AddIcon = styled(MuiAddIcon)`
    font-size: 1.6em;
`;

export const Avatar = styled(MyAvatar)`
    ${({ theme }) => `
        ${theme.breakpoints.down('sm')} {
            width: 30px;
            height: 30px;
        }
    `}
`;

export const NavLogo = styled('img')`
    width: 124px;
    height: 70px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    ${({ theme }) => `

        ${theme.breakpoints.down('sm')} {
            width: 100px;
            height: 56px;
        }

        ${theme.breakpoints.down('xs')} {
            display: none;
        }
    `}
`;
