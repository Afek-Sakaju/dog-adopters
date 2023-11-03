import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MUI_VARIANTS, getCapitalLetters } from '@utils';
import { MuiAvatar } from './Avatar.styled';

export default function Avatar({
    fallbackImage,
    icon,
    image,
    onClick,
    size,
    username,
    variant,
    ...props
}) {
    const [url, setUrl] = useState(image);
    const [fallbackSet, setFallbackSet] = useState(false);

    const onError = () => {
        if (fallbackSet) return setUrl(undefined);
        setFallbackSet(true);
        setUrl(fallbackImage);
    };

    return (
        <MuiAvatar
            alt={username ?? 'avatar'}
            src={url}
            sx={{ width: size, height: size }}
            variant={variant}
            imgProps={{ onError }}
            onClick={onClick}
            {...props}
        >
            {!url && (icon ?? getCapitalLetters(username))}
        </MuiAvatar>
    );
}

Avatar.propTypes = {
    fallbackImage: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    username: PropTypes.string,
    variant: PropTypes.oneOf(MUI_VARIANTS.AVATAR),
};

Avatar.defaultProps = {
    fallbackImage: undefined,
    icon: undefined,
    image: undefined,
    onClick: undefined,
    size: undefined,
    username: undefined,
    variant: 'rounded',
};
