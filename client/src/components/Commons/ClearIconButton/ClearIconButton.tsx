import React from 'react';
import type { FC, ReactNode } from 'react';

import { ClearIconContainer, Icon, ClearIcon } from './ClearIconButton.styled';

interface ClearIconButtonProps {
    onClick?: VoidFunction;
    tooltipText?: string;
    [key: string]: unknown;
}

const ClearIconButton: FC<ClearIconButtonProps> = ({
    onClick,
    tooltipText = 'Clear',
}): ReactNode => {
    return (
        <ClearIconContainer>
            <Icon
                onClick={onClick}
                icon={<ClearIcon />}
                tooltipText={tooltipText}
            />
        </ClearIconContainer>
    );
};

export default ClearIconButton;
