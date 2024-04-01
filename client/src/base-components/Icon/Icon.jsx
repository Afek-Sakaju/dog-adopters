import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip, IconContainer } from './Icon.styled';

export default function Icon({
    icon,
    paddingLeft,
    paddingRight,
    tooltipText,
    ...props
}) {
    return (
        <IconContainer sx={{ paddingLeft, paddingRight }}>
            <Tooltip title={tooltipText} arrow {...props}>
                <IconContainer>{icon}</IconContainer>
            </Tooltip>
        </IconContainer>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    tooltipText: PropTypes.string,
};

Icon.defaultProps = {
    icon: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    tooltipText: undefined,
};
