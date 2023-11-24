/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthProxy } from '@proxies';
import {
    MUI_VARIANTS,
    APP_PATHS,
    PAGES_TITLES,
    COMPONENTS_CONTENT,
} from '@utils';
import { getUserReselectSelector, removeUserAction } from '@store';
import {
    AppBar,
    Avatar,
    DogIcon,
    NavButton,
    NavLogo,
    AddIcon,
} from './NavBar.styled';

const NavBar = ({ children, user, onLogout, ...props }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoggedIn = !!user?._id;

    const isOnLoginPage = location?.pathname === APP_PATHS.LOGIN;
    const isOnRegisterPage = location?.pathname === APP_PATHS.REGISTER;
    const isOnDogsDataListPage = location?.pathname === APP_PATHS.DOGS_DATA;
    const isOnDogCreationPage = location?.pathname === APP_PATHS.CREATE_DOG;

    const handleLogoClick = () => navigate(APP_PATHS.DOGS_DATA);
    const handleLoginClick = () => navigate(APP_PATHS.LOGIN);
    const handleRegisterClick = () => navigate(APP_PATHS.REGISTER);
    const handleAddDogClick = () => navigate(APP_PATHS.CREATE_DOG);
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
                    src=
                    onClick={handleLogoClick}
                />
            }
            title={isOnDogsDataListPage ? PAGES_TITLES.DOGS_DATA : undefined}
            titleStyle={{ color: '#e91d25' }}
            {...props}
        >
            {isLoggedIn ? (
                <>
                    <NavButton
                        invertColors
                        isIconButton
                        isSelected={isOnDogCreationPage}
                        onClick={handleAddDogClick}
                    >
                        <AddIcon />
                        <DogIcon />
                    </NavButton>
                    <NavButton
                        fullWidth
                        invertColors
                        label={COMPONENTS_CONTENT.NAV_BAR.LOGOUT_BUTTON}
                        onClick={handleLogoutClick}
                    />
                </>
            ) : (
                <>
                    <NavButton
                        fullWidth
                        invertColors
                        label={COMPONENTS_CONTENT.NAV_BAR.LOGIN_BUTTON}
                        onClick={handleLoginClick}
                        isSelected={isOnLoginPage}
                    />
                    <NavButton
                        label={COMPONENTS_CONTENT.NAV_BAR.LOGIN_BUTTON}
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
