/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { MUI_VARIANTS } from '@utils';
import { getUserReselectSelector, removeUserAction } from '@store';
import { AppBar, Avatar, NavButton, NavLogo } from './NavBar.styled';

const NavBar = ({ children, user, onLogout, ...props }) => {
    const handleSubmit = () => {};

    const location = useLocation();

    const isLoggedIn = !!user?._id;

    const isLoginPage = location?.pathname === '/login';
    const isRegisterPage = location?.pathname === '/register';

    return (
        <AppBar
            startCmp={<NavLogo alt="/logo" src="/nav-logo.png" />}
            {...props}
        >
            {isLoggedIn ? (
                <NavButton
                    fullWidth
                    invertColors
                    label="Log-Out"
                    onClick={() => handleSubmit()}
                />
            ) : (
                <>
                    <NavButton
                        fullWidth
                        invertColors
                        label="Log-In"
                        onClick={() => handleSubmit()}
                        isSelected={isLoginPage}
                    />
                    <NavButton
                        label="Register"
                        fullWidth
                        onClick={() => handleSubmit()}
                        isSelected={isRegisterPage}
                    />
                </>
            )}
            <Avatar
                username={user?.username}
                variant={MUI_VARIANTS.AVATAR.VALUES.CIRCULAR}
            />
            {children}
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    user: getUserReselectSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: (user) => {
        dispatch(removeUserAction({ user }));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
