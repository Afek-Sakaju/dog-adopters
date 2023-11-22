import React from 'react';

import { AppBar } from '@base-components';
import { LoginButton, RegisterButton } from './NavBar.styled';

export default function NavBar({ children, ...props }) {
    const handleSubmit = () => {};

    return (
        <AppBar {...props}>
            <RegisterButton
                label="Login"
                sx={{ padding: '0.7em' }}
                fullWidth
                onClick={() => handleSubmit()}
            />
            <LoginButton
                label="Register"
                sx={{ padding: '0.7em' }}
                fullWidth
                onClick={() => handleSubmit()}
            />
            {children}
        </AppBar>
    );
}
