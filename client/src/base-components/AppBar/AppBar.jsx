import React from 'react';
import PropTypes from 'prop-types';

import { MUI_COLORS } from '#utils';
import { MuiAppBar, Toolbar, Box, Title } from './AppBar.styled';

export default function AppBar({
    children,
    color,
    title,
    titleStyle,
    position,
    startCmp,
    ...props
}) {
    return (
        <MuiAppBar color={color} position={position} {...props}>
            <Toolbar>
                <Box>{startCmp}</Box>
                {title && <Title sx={titleStyle}>{title}</Title>}
                <Box>{children}</Box>
            </Toolbar>
        </MuiAppBar>
    );
}

AppBar.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    titleStyle: PropTypes.object,
    position: PropTypes.string,
    startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

AppBar.defaultProps = {
    color: MUI_COLORS.PRIMARY,
    title: undefined,
    titleStyle: undefined,
    position: undefined,
    startCmp: undefined,
};
