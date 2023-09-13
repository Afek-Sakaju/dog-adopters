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
    imageUrl,
    information,
    onClick,
    title,
    ...props
}) {
    return (
        <Zoom in style={{ transitionDelay: '100ms' }}>
            <MuiCard onClick={onClick} {...props}>
                <CardActionArea>
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
    imageUrl: PropTypes.string,
    information: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
};

Card.defaultProps = {
    imageUrl: undefined,
    information: undefined,
    onClick: undefined,
    title: undefined,
};
