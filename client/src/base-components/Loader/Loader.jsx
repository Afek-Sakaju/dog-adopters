import React from 'react';
import PropTypes from 'prop-types';

import { MUI_LOADER_VARIANTS_LIST } from '#utils';
import {
    CircularLoaderAnimation,
    LinearLoaderAnimation,
    LoaderTitle,
    LoaderWrapper,
} from './Loader.styled';

export default function Loader({
    BgColor,
    color,
    textColor,
    title,
    variant,
    ...props
}) {
    const isCircular = variant === 'circular';

    return isCircular ? (
        <>
            {title && <LoaderTitle>{title}</LoaderTitle>}
            <CircularLoaderAnimation color="inherit" {...props} />
        </>
    ) : (
        <LoaderWrapper color={color} sx={{ backgroundColor: BgColor }}>
            {title && <LoaderTitle>{title}</LoaderTitle>}{' '}
            <LinearLoaderAnimation color="inherit" {...props} />
        </LoaderWrapper>
    );
}

Loader.propTypes = {
    BgColor: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    variant: PropTypes.oneOf(MUI_LOADER_VARIANTS_LIST),
};

Loader.defaultProps = {
    BgColor: undefined,
    color: undefined,
    textColor: undefined,
    title: undefined,
    variant: undefined,
};
