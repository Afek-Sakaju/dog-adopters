import type { FC, ReactNode } from 'react';
import React from 'react';

import { LayoutWrapper } from './Layout.styled';
import NavBar from '../NavBar/NavBar';

interface MainLayoutProps {
    children: ReactNode;
    [key: string]: unknown;
}

const Layout: FC<MainLayoutProps> = (props): ReactNode => {
    const { children, ...rest } = props;

    return (
        <LayoutWrapper {...rest}>
            <NavBar />
            {children}
        </LayoutWrapper>
    );
};

export default Layout;
