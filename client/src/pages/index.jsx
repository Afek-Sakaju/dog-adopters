import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes as Switch,
    Navigate,
} from 'react-router-dom';

import { APP_PATHS } from '@utils';
import { NavBar } from '@components';
import Login from './Login/Login';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import EditDog from './EditDog/EditDog';
import CreateDog from './CreateDog/CreateDog';
import DogsList from './DogsList/DogsList';

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path={APP_PATHS.LOGIN} element={<Login />} />
                <Route path={APP_PATHS.REGISTER} element={<Register />} />
                <Route
                    path={`${APP_PATHS.USERS}/:userId`}
                    element={<Profile />}
                />
                <Route path={APP_PATHS.DOGS_DATA} element={<DogsList />} />
                <Route path={APP_PATHS.CREATE_DOG} element={<CreateDog />} />
                <Route
                    path={`${APP_PATHS.DOGS_DATA}/:dogId`}
                    element={<EditDog />}
                />
                <Route path="*" element={<Navigate to={APP_PATHS.LOGIN} />} />
            </Switch>
        </BrowserRouter>
    );
}
