import React from 'react';
import PropTypes from 'prop-types';

import {
    Box,
    CardActionArea,
    CardContent,
    CardMedia,
    ContentTypography,
    Zoom,
    MuiCard,
    TitleTypography,
} from './Card.styled';

export default function Card({
    children,
    disableRipple,
    imageUrl,
    information,
    onClick,
    title,
    variant,
    ...props
}) {
    return (
        <Zoom in style={{ transitionDelay: '100ms' }}>
            <MuiCard onClick={onClick} variant={variant} {...props}>
                <CardActionArea disableRipple={disableRipple}>
                    {imageUrl ? (
                        <CardMedia
                            component="img"
                            image={imageUrl}
                            alt={title}
                        />
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
                        {information ? (
                            <Box>
                                <ContentTypography
                                    variant="body6"
                                    color="text.secondary"
                                >
                                    {information}
                                </ContentTypography>
                            </Box>
                        ) : null}
                        {children ? <Box>{children}</Box> : null}
                    </CardContent>
                </CardActionArea>
            </MuiCard>
        </Zoom>
    );
}

Card.propTypes = {
    disableRipple: PropTypes.bool,
    imageUrl: PropTypes.string,
    information: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'standard']),
};

Card.defaultProps = {
    disableRipple: undefined,
    imageUrl: undefined,
    information: undefined,
    onClick: undefined,
    title: undefined,
    variant: undefined,
};
