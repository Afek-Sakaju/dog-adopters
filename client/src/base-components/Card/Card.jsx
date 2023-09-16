import React from 'react';
import PropTypes from 'prop-types';

import {
    CardActionArea,
    CardContent,
    CardMedia,
    MuiCard,
    TitleTypography,
} from './Card.styled';

export default function Card({
    children,
    disableRipple,
    imageUrl,
    onClick,
    title,
    variant,
    ...props
}) {
    return (
        <MuiCard onClick={onClick} variant={variant} {...props}>
            <CardActionArea disableRipple={disableRipple}>
                {imageUrl ? (
                    <CardMedia component="img" image={imageUrl} alt={title} />
                ) : null}
                <CardContent>
                    {title ? (
                        <TitleTypography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {title}
                        </TitleTypography>
                    ) : null}
                    {children}
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
}

Card.propTypes = {
    disableRipple: PropTypes.bool,
    imageUrl: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'standard']),
};

Card.defaultProps = {
    disableRipple: undefined,
    imageUrl: undefined,
    onClick: undefined,
    title: undefined,
    variant: undefined,
};
