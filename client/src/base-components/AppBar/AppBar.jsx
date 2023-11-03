import React from 'react';
import PropTypes from 'prop-types';

import { MUI_COLORS } from '@utils';
import { MuiAppBar, Toolbar, Box, Typography } from './AppBar.styled';

export default function AppBar({
    children,
    color,
    label,
    position,
    startCmp,
    ...props
}) {
    return (
        <MuiAppBar color={color} position={position} {...props}>
            <Toolbar>
                <Box>
                    {startCmp}
                    {label ? (
                        <Typography variant="h6">{label}</Typography>
                    ) : null}
                </Box>
                <Box>{children}</Box>
            </Toolbar>
        </MuiAppBar>
    );
}

AppBar.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    position: PropTypes.string,
    startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

AppBar.defaultProps = {
    color: MUI_COLORS[0],
    label: undefined,
    position: undefined,
    startCmp: undefined,
};
