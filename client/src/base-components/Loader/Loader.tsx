import type { FC, ReactNode } from 'react';
import React from 'react';

import type { MuiColor } from '@/types';
import { CircularLoaderAnimation } from './Loader.styled';

interface LoaderProps {
    color?: MuiColor;
    [key: string]: unknown;
}

const Loader: FC<LoaderProps> = (props): ReactNode => {
    const { ...rest } = props;

    return <CircularLoaderAnimation color="secondary" {...rest} />;
};

export default Loader;
