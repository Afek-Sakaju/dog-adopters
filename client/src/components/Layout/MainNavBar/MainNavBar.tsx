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
    const [showNavbar, setShowNavbar] = useState(true);
    const { t } = useTranslation();
    const isLoggedIn: boolean = !!user;

    const location: Location<unknown> = useLocation();
    const navigate: NavigateFunction = useNavigate();

    const isOnDogCreationPage: boolean =
        location?.pathname === APP_PATHS.CREATE_DOG;

    const handleLogoClick = (): void =>
        isLoggedIn && navigate(APP_PATHS.DOGS_DATA);
    const handleAddDogClick = (): void => navigate(APP_PATHS.CREATE_DOG);
    const handleLogoutClick = async (): Promise<void> => {
        await AuthProxy.logoutUser()
            .then(() => onLogout())
            .then(() => navigate(APP_PATHS.LOGIN))
            .catch((e) => console.error(e));
    };

    useEffect(() => {
        const currentPath: string = location?.pathname;

        const isOnLoginPage: boolean = currentPath === APP_PATHS.LOGIN;
        const isOnRegisterPage: boolean = currentPath === APP_PATHS.REGISTER;

        setShowNavbar(!isOnLoginPage && !isOnRegisterPage);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return showNavbar ? (
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
            {isLoggedIn && (
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
                        label={t('components.navbar.logout_btn')}
                        onClick={handleLogoutClick}
                    />
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
