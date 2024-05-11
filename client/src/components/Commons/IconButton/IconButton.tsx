import React from 'react';
import type { FC, ReactNode } from 'react';

import { Icon } from './IconButton.styled';

interface IconButtonProps {
    onClick?: VoidFunction;
    tooltipText?: string;
    icon?: ReactNode;
    [key: string]: unknown;
}

const IconButton: FC<IconButtonProps> = ({
    onClick,
    tooltipText = 'Clear',
    icon,
}): ReactNode => {
    return <Icon onClick={onClick} icon={icon} tooltipText={tooltipText} />;
};

export default IconButton;
