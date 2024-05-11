import type { FC, ReactNode } from 'react';
import React from 'react';

import type { MuiCardVariant } from '@/types';
import {
    CardActionArea,
    CardContent,
    CardMedia,
    MuiCard,
    TitleTypography,
} from './Card.styled';

interface CardProps {
    children?: ReactNode;
    disableRipple?: boolean;
    elevation?: number;
    imageUrl?: string;
    imageHeight?: string;
    imageWidth?: string;
    onClick?: () => void;
    title?: string;
    variant?: MuiCardVariant;
}

const Card: FC<CardProps> = ({
    children,
    disableRipple,
    elevation = 0,
    imageUrl,
    imageHeight,
    imageWidth,
    onClick,
    title,
    variant = 'elevation',
    ...props
}) => {
    return (
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
                        imageHeight={imageHeight}
                        imageWidth={imageWidth}
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
    );
};

export default Card;
