import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip, IconContainer } from './Icon.styled';

export default function Icon({ icon, tooltipText, ...props }) {
    return (
        <Tooltip title={tooltipText} arrow {...props}>
            <IconContainer>{icon}</IconContainer>
        </Tooltip>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
    tooltipText: PropTypes.string,
};

Icon.defaultProps = {
    icon: undefined,
    tooltipText: undefined,
};
