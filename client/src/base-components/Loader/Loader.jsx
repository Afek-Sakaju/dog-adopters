import React from 'react';
import PropTypes from 'prop-types';

import { LoaderWrapper, LoaderAnimation, LoaderTitle } from './Loader.styled';

export default function Loader({ color, title, textColor, BgColor, ...props }) {
    return (
        <LoaderWrapper color={color} sx={{ backgroundColor: BgColor }}>
            <LoaderTitle>{title}</LoaderTitle>
            <LoaderAnimation color="inherit" {...props} />
        </LoaderWrapper>
    );
}

Loader.propTypes = {
    BgColor: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    textColor: PropTypes.string,
};

Loader.defaultProps = {
    BgColor: undefined,
    color: undefined,
    title: undefined,
    textColor: undefined,
};
