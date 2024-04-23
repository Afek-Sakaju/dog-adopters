import type { FC, ReactNode } from 'react';
import React, { useState } from 'react';

import type { MuiAvatarVariant } from '@/types';
import { getCapitalLetters } from '@/utils';
import { MyAvatar, Tooltip } from './Avatar.styled';

interface AvatarProps {
    fallbackImage?: string;
    icon?: ReactNode;
    image?: string;
    onClick?: () => void;
    size?: string;
    tooltipText?: string;
    username?: string;
    variant?: MuiAvatarVariant;
    [key: string]: unknown;
}

const Avatar: FC<AvatarProps> = (props): ReactNode => {
    const {
        fallbackImage,
        icon,
        image,
        onClick,
        size,
        username,
        variant = 'rounded',
        tooltipText,
        ...rest
    } = props;

    const [url, setUrl] = useState(image);
    const [fallbackSet, setFallbackSet] = useState(false);

    const onError = () => {
        if (fallbackSet) return setUrl(undefined);
        setFallbackSet(true);
        setUrl(fallbackImage);
    };

    return (
        <Tooltip title={tooltipText} arrow>
            <MyAvatar
                alt={username ?? 'avatar'}
                src={url}
                sx={{ width: size, height: size }}
                variant={variant}
                imgProps={{ onError }}
                onClick={onClick}
                {...rest}
            >
                {!url && (icon ?? getCapitalLetters(username))}
            </MyAvatar>
        </Tooltip>
    );
};

export default Avatar;
