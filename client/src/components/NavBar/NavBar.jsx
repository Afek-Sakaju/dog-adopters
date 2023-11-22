import React from 'react';

import { LoginButton, RegisterButton, AppBar, NavLogo } from './NavBar.styled';

export default function NavBar({ children, ...props }) {
    const handleSubmit = () => {};

    return (
        <AppBar
            startCmp={<NavLogo alt="/logo" src="/nav-logo.png" />}
            {...props}
        >
            <LoginButton
                label="Log-In"
                fullWidth
                onClick={() => handleSubmit()}
            />
            <RegisterButton
                label="Register"
                fullWidth
                onClick={() => handleSubmit()}
            />
            {children}
        </AppBar>
    );
}
