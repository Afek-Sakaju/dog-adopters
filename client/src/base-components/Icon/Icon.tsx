import type { FC, ReactNode } from 'react';
import React from 'react';

import { IconContainer, Tooltip } from './Icon.styled';

interface IconProps {
    icon?: ReactNode;
    paddingLeft?: string;
    paddingRight?: string;
    tooltipText?: string;
    [key: string]: unknown;
}

const Icon: FC<IconProps> = (props): ReactNode => {
    const { icon, paddingLeft, paddingRight, tooltipText, ...rest } = props;

    return (
        <IconContainer sx={{ paddingLeft, paddingRight }}>
            <Tooltip title={tooltipText} arrow {...rest}>
                <IconContainer>{icon}</IconContainer>
            </Tooltip>
        </IconContainer>
    );
};

export default Icon;
