import type { FC, ReactNode } from 'react';
import React from 'react';

import type { MuiColor } from '@/types';
import { Box, MuiAppBar, Toolbar } from './AppBar.styled';

interface AppBarProps {
    color?: MuiColor;
    elevation?: number;
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
                <Box>{children}</Box>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;
