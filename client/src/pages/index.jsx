import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

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
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users/:userId" element={<Profile />} />
                <Route path="/dogs" element={<DogsList />} />
                <Route path="/dogs/new" element={<CreateDog />} />
                <Route path="/dogs/:dogId" element={<EditDog />} />
            </Switch>
        </BrowserRouter>
    );
}
