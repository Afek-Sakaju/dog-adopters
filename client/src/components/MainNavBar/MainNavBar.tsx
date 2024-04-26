/* eslint-disable react/prop-types */
import type { ReactNode } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import type { Location, NavigateFunction } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import type { User } from '@/types';
import { AuthProxy } from '@/proxies';
import { getUserSelector, removeUserAction } from '@/store';
import { APP_PATHS, COMPONENTS_CONTENT, IMAGES_SRC } from '@/utils';
import {
    AddIcon,
    AppBar,
    Avatar,
    DogIcon,
    NavButton,
    NavLogo,
} from './MainNavBar.styled';

interface MainNavBarProps {
    children?: ReactNode;
    user?: User;
    onLogout?: () => void;
    [key: string]: unknown;
}

const MainNavBar = ({
    children,
    user,
    onLogout,
    ...props
}: MainNavBarProps): ReactNode => {
    const isLoggedIn: boolean = !!user;

    const location: Location<unknown> = useLocation();
    const navigate: NavigateFunction = useNavigate();

    const isOnLoginPage: boolean = location?.pathname === APP_PATHS.LOGIN;
    const isOnRegisterPage: boolean = location?.pathname === APP_PATHS.REGISTER;
    const isOnDogCreationPage: boolean =
        location?.pathname === APP_PATHS.CREATE_DOG;

    const handleLogoClick = (): void =>
        isLoggedIn && navigate(APP_PATHS.DOGS_DATA);
    const handleLoginClick = (): void => navigate(APP_PATHS.LOGIN);
    const handleRegisterClick = (): void => navigate(APP_PATHS.REGISTER);
    const handleAddDogClick = (): void => navigate(APP_PATHS.CREATE_DOG);
    const handleLogoutClick = async (): Promise<void> => {
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
                    src={IMAGES_SRC.NAV_APP_LOGO}
                    onClick={handleLogoClick}
                />
            }
            titleStyle={{ color: '#1976d2' }}
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
                    <Avatar
                        username={user?.fullName || user?.username}
                        variant="circular"
                        tooltipText={user?.username}
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
                        label={COMPONENTS_CONTENT.NAV_BAR.REGISTER_BUTTON}
                        fullWidth
                        onClick={handleRegisterClick}
                        isSelected={isOnRegisterPage}
                    />
                </>
            )}

            {children}
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    user: getUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: (user: User) => {
        dispatch(removeUserAction({ user }));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
