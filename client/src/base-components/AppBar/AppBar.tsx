import type { FC, ReactNode, CSSProperties } from 'react';
import React from 'react';

import type { MuiColor } from '@/types';
import { Box, MuiAppBar, Title, Toolbar } from './AppBar.styled';

interface AppBarProps {
    color?: MuiColor;
    elevation?: number;
    title?: string;
    titleStyle?: CSSProperties;
    position?: 'fixed' | 'absolute' | 'static' | 'sticky' | 'relative';
    startCmp?: string | ReactNode;
    children?: ReactNode;
    [key: string]: unknown;
}

const AppBar: FC<AppBarProps> = (props): ReactNode => {
    const {
        children,
        color = 'primary',
        elevation = 0,
        title,
        titleStyle,
        position,
        startCmp,
        ...rest
    } = props;
    return (
        <MuiAppBar
            color={color}
            position={position}
            elevation={elevation}
            {...rest}
        >
            <Toolbar>
                <Box>{startCmp}</Box>
                {title && <Title sx={titleStyle}>{title}</Title>}
                <Box>{children}</Box>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;
