import { createSelector } from '@reduxjs/toolkit';

const getUsersListSelector = (state) => state.users.usersList;
const getUserSelector = (state) => state.users.user;

export const getUsersListReselectSelector = createSelector(
    getUsersListSelector,
    (usersList) => usersList
);

export const getUserSelector = createSelector(getUserSelector, (user) => user);
