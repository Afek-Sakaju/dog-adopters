import type { FC, ReactNode } from 'react';
import React from 'react';

import type { MuiCardVariant } from '@/types';
import {
    CardActionArea,
    CardContent,
    CardMedia,
    MuiCard,
    TitleTypography,
    Zoom,
} from './Card.styled';

interface CardProps {
    children?: ReactNode;
    disableRipple?: boolean;
    elevation?: number;
    imageUrl?: string;
    onClick?: () => void;
    title?: string;
    variant?: MuiCardVariant;
}

const Card: FC<CardProps> = ({
    children,
    disableRipple,
    elevation = 0,
    imageUrl,
    onClick,
    title,
    variant = 'elevation',
    ...props
}) => {
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
                            // @ts-ignore
                            component="img"
                            image={imageUrl}
                            alt={title}
                        />
                    ) : null}
                    <CardContent>
                        {title ? (
                            <TitleTypography
                                // @ts-ignore
                                component="div"
                                gutterBottom
                                variant="h5"
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
};

export default Card;
