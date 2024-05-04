import React, { type ReactNode } from 'react';
import {
    BrowserRouter,
    Route,
    Routes as Switch,
    Navigate,
} from 'react-router-dom';

import { APP_PATHS } from '@/utils';
import { MainNavBar } from '@/components';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import EditDogPage from './EditDogPage/EditDogPage';
import CreateDogPage from './CreateDogPage/CreateDogPage';
import DogsListPage from './DogsListPage/DogsListPage';

export default function Router(): ReactNode {
    return (
        <BrowserRouter>
            <MainNavBar />
            <Switch>
                <Route path={APP_PATHS.LOGIN} element={<LoginPage />} />
                <Route path={APP_PATHS.REGISTER} element={<RegisterPage />} />
                <Route
                    path={`${APP_PATHS.ABOUT_US}`}
                    element={<AboutUsPage />}
                />
                <Route path={APP_PATHS.DOGS_DATA} element={<DogsListPage />} />
                <Route
                    path={APP_PATHS.CREATE_DOG}
                    element={<CreateDogPage />}
                />
                <Route
                    path={`${APP_PATHS.DOGS_DATA}/:dogId`}
                    element={<EditDogPage />}
                />
                <Route path="*" element={<Navigate to={APP_PATHS.LOGIN} />} />
            </Switch>
        </BrowserRouter>
    );
}
