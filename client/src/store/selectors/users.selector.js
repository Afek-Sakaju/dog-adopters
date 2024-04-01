import { createSelector } from '@reduxjs/toolkit';

const getUserDataSelector = (state) => state.users.user;

// eslint-disable-next-line import/prefer-default-export
export const getUserSelector = createSelector(
    getUserDataSelector,
    (user) => user
);
