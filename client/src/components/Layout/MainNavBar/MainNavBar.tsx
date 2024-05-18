/* eslint-disable react/prop-types */
import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { Location, NavigateFunction } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { User } from '@/types';
import { AuthProxy } from '@/proxies';
import { RootState, getUserSelector, removeUserAction } from '@/store';
import { APP_PATHS, IMAGES_SRC } from '@/utils';
import { AppBar, Avatar, NavLinkButton, NavLogo } from './MainNavBar.styled';

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
    const [showNavbar, setShowNavbar] = useState(true);
    const { t } = useTranslation();
    const isLoggedIn: boolean = !!user;

    const location: Location<unknown> = useLocation();
    const navigate: NavigateFunction = useNavigate();

    const navigateToDogsListPage = (): void =>
        isLoggedIn && navigate(APP_PATHS.dogsList);
    const navigateToDogCreationPage = (): void => navigate(APP_PATHS.createDog);
    const navigateToAboutUsPage = (): void => navigate(APP_PATHS.aboutUs);

    const handleLogoutClick = async (): Promise<void> => {
        await AuthProxy.logoutUser()
            .then(() => onLogout())
            .then(() => navigate(APP_PATHS.login))
            .catch((e) => console.error(e));
    };

    useEffect(() => {
        const currentPath: string = location?.pathname;

        const isOnLoginPage: boolean = currentPath === APP_PATHS.login;
        const isOnRegisterPage: boolean = currentPath === APP_PATHS.register;

        setShowNavbar(!isOnLoginPage && !isOnRegisterPage);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return showNavbar ? (
        <AppBar
            position="relative"
            startCmp={
                <NavLogo
                    alt="/logo"
                    src={IMAGES_SRC.NAV_APP_LOGO}
                    onClick={navigateToDogsListPage}
                />
            }
            {...props}
        >
            {(isLoggedIn || true) && (
                <>
                    <NavLinkButton onClick={navigateToAboutUsPage}>
                        {t('components.navbar.about_btn')}
                    </NavLinkButton>
                    <NavLinkButton onClick={navigateToDogsListPage}>
                        {t('components.navbar.dogs_list_btn')}
                    </NavLinkButton>
                    <NavLinkButton onClick={navigateToDogCreationPage}>
                        {t('components.navbar.post_dog_btn')}
                    </NavLinkButton>
                    <NavLinkButton
                        // @ts-ignore
                        invertColors
                        onClick={handleLogoutClick}
                    >
                        {t('components.navbar.logout_btn')}
                    </NavLinkButton>
                    <Avatar
                        username={user?.fullName || user?.username}
                        variant="circular"
                        tooltipText={user?.username}
                    />
                </>
            )}
            {children}
        </AppBar>
    ) : null;
};

const mapStateToProps = (state: RootState) => ({
    user: getUserSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogout: () => {
        dispatch(removeUserAction());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
