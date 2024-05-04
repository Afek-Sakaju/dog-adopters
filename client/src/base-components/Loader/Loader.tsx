import type { FC, ReactNode } from 'react';
import React from 'react';

import type { MuiLoaderVariant } from '@/types';
import {
    CircularLoaderAnimation,
    LinearLoaderAnimation,
    LoaderTitle,
    LoaderWrapper,
} from './Loader.styled';

interface LoaderProps {
    BgColor?: string;
    color?: string;
    title?: string;
    variant?: MuiLoaderVariant;
    [key: string]: unknown;
}

const Loader: FC<LoaderProps> = (props): ReactNode => {
    const { BgColor, color, title, variant, ...rest } = props;
    const isCircular: boolean = variant === 'circular';

    return isCircular ? (
        <>
            {title && <LoaderTitle>{title}</LoaderTitle>}
            <CircularLoaderAnimation color="inherit" {...rest} />
        </>
    ) : (
        <LoaderWrapper color={color} sx={{ backgroundColor: BgColor }}>
            {title && <LoaderTitle>{title}</LoaderTitle>}{' '}
            <LinearLoaderAnimation color="inherit" {...rest} />
        </LoaderWrapper>
    );
};

export default Loader;
