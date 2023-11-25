import React from 'react';
import PropTypes from 'prop-types';

import { LoaderWrapper, LoaderAnimation, LoaderTitle } from './Loader.styled';

export default function Loader({ color, title, textColor, ...props }) {
    return (
        <LoaderWrapper color={color}>
            <LoaderTitle>{title}</LoaderTitle>
            <LoaderAnimation color="inherit" {...props} />
        </LoaderWrapper>
    );
}

Loader.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    textColor: PropTypes.string,
};

Loader.defaultProps = {
    color: undefined,
    title: undefined,
    textColor: undefined,
};
