/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthProxy } from '@proxies';
import { MUI_VARIANTS, APP_PATHS, IMAGES_SRC } from '@utils';
import { getUserReselectSelector, removeUserAction } from '@store';
import { useTranslation } from '@src/i18n';
import {
    AppBar,
    Avatar,
    DogIcon,
    NavButton,
    NavLogo,
    AddIcon,
} from './NavBar.styled';

const NavBar = ({ children, user, onLogout, ...props }) => {
    const isLoggedIn = !!user;

    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation('nav-bar');

    const isOnLoginPage = location?.pathname === APP_PATHS.LOGIN;
    const isOnRegisterPage = location?.pathname === APP_PATHS.REGISTER;
    const isOnDogsDataListPage = location?.pathname === APP_PATHS.DOGS_DATA;
    const isOnDogCreationPage = location?.pathname === APP_PATHS.CREATE_DOG;

    const handleLogoClick = () => isLoggedIn && navigate(APP_PATHS.DOGS_DATA);
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
                    src={IMAGES_SRC.NAV_APP_LOGO}
                    onClick={handleLogoClick}
                />
            }
            title={
                isOnDogsDataListPage && isLoggedIn
                    ? t('dogs-list-page.title')
                    : undefined
            }
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
                        label={t('logout-button')}
                        onClick={handleLogoutClick}
                    />
                    <Avatar
                        username={user?.fullName || user?.username}
                        variant={MUI_VARIANTS.AVATAR.VALUES.CIRCULAR}
                        tooltipText={user?.username}
                    />
                </>
            ) : (
                <>
                    <NavButton
                        fullWidth
                        invertColors
                        label={t('login-button')}
                        onClick={handleLoginClick}
                        isSelected={isOnLoginPage}
                    />
                    <NavButton
                        label={t('register-button')}
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
    user: getUserReselectSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: (user) => {
        dispatch(removeUserAction({ user }));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
