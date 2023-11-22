/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthProxy } from '@proxies';
import { MUI_VARIANTS, APP_PATHS } from '@utils';
import { getUserReselectSelector, removeUserAction } from '@store';
import { AppBar, Avatar, NavButton, NavLogo } from './NavBar.styled';

const NavBar = ({ children, user, onLogout, ...props }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoggedIn = !!user?._id;

    const isOnLoginPage = location?.pathname === APP_PATHS.LOGIN;
    const isOnRegisterPage = location?.pathname === APP_PATHS.REGISTER;

    const handleLogoClick = () => navigate(APP_PATHS.DOGS_DATA);
    const handleLoginClick = () => navigate(APP_PATHS.LOGIN);
    const handleRegisterClick = () => navigate(APP_PATHS.REGISTER);
    const handleLogoutClick = async () => {
        await AuthProxy.logoutUser()
            .then(() => onLogout())
            .then(() => navigate(APP_PATHS.LOGIN))
            .catch((e) => console.error(e));
    };

    return (
        <AppBar
            startCmp={
                <NavLogo
                    alt="/logo"
                    src="/nav-logo.png"
                    onClick={handleLogoClick}
                />
            }
            {...props}
        >
            {isLoggedIn ? (
                <NavButton
                    fullWidth
                    invertColors
                    label="Log-Out"
                    onClick={handleLogoutClick}
                />
            ) : (
                <>
                    <NavButton
                        fullWidth
                        invertColors
                        label="Log-In"
                        onClick={handleLoginClick}
                        isSelected={isOnLoginPage}
                    />
                    <NavButton
                        label="Register"
                        fullWidth
                        onClick={handleRegisterClick}
                        isSelected={isOnRegisterPage}
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
