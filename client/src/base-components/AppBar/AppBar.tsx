import React from 'react';

import type { MuiColor } from '@/types';
import { Box, MuiAppBar, Title, Toolbar } from './AppBar.styled';

interface AppBarProps {
    color?: MuiColor;
    elevation?: number;
    title?: string;
    titleStyle?: React.CSSProperties;
    position?: 'fixed' | 'absolute' | 'static' | 'sticky' | 'relative';
    startCmp?: string | React.ReactNode;
    [key: string]: any;
}

export default function AppBar({
    children,
    color = 'primary',
    elevation = 0,
    title,
    titleStyle,
    position,
    startCmp,
    ...props
}: AppBarProps) {
    return (
        <MuiAppBar
            color={color}
            position={position}
            elevation={elevation}
            {...props}
        >
            <Toolbar>
                <Box>{startCmp}</Box>
                {title && <Title sx={titleStyle}>{title}</Title>}
                <Box>{children}</Box>
            </Toolbar>
        </MuiAppBar>
    );
}
