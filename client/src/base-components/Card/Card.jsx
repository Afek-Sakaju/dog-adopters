import React from 'react';
import PropTypes from 'prop-types';

import { MUI_VARIANTS } from '@/utils';
import {
    CardActionArea,
    CardContent,
    CardMedia,
    Zoom,
    MuiCard,
    TitleTypography,
} from './Card.styled';

export default function Card({
    children,
    disableRipple,
    elevation,
    imageUrl,
    onClick,
    title,
    variant,
    ...props
}) {
    return (
        <Zoom in style={{ transitionDelay: '100ms' }}>
            <MuiCard
                onClick={onClick}
                variant={variant}
                elevation={elevation}
                {...props}
            >
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
                        {children}
                    </CardContent>
                </CardActionArea>
            </MuiCard>
        </Zoom>
    );
}

Card.propTypes = {
    disableRipple: PropTypes.bool,
    elevation: PropTypes.number,
    imageUrl: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    variant: PropTypes.oneOf(MUI_VARIANTS.CARD.LIST),
};

Card.defaultProps = {
    disableRipple: undefined,
    elevation: 0,
    imageUrl: undefined,
    onClick: undefined,
    title: undefined,
    variant: MUI_VARIANTS.CARD.VALUES.UNDEFINED,
};
