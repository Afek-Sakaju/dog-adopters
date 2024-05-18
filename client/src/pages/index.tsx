import React, { type ReactNode } from 'react';
import {
    BrowserRouter,
    Route,
    Routes as Switch,
    Navigate,
} from 'react-router-dom';

import { APP_PATHS } from '@/utils';
import { MainLayout } from '@/components';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import EditDogPage from './EditDogPage/EditDogPage';
import CreateDogPage from './CreateDogPage/CreateDogPage';
import DogsListPage from './DogsListPage/DogsListPage';
import ViewDogPage from './ViewDogPage/ViewDogPage';

export default function Router(): ReactNode {
    return (
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path={APP_PATHS.login} element={<LoginPage />} />
                    <Route
                        path={APP_PATHS.register}
                        element={<RegisterPage />}
                    />
                    <Route
                        path={`${APP_PATHS.aboutUs}`}
                        element={<AboutUsPage />}
                    />
                    <Route
                        path={APP_PATHS.dogsList}
                        element={<DogsListPage />}
                    />
                    <Route
                        path={APP_PATHS.createDog}
                        element={<CreateDogPage />}
                    />
                    <Route
                        path={`${APP_PATHS.editDog}/:dogId`}
                        element={<EditDogPage />}
                    />
                    <Route
                        path={`${APP_PATHS.viewDog}/:dogId`}
                        element={<ViewDogPage />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to={APP_PATHS.login} />}
                    />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    );
}
