import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

const getUserDataSelector = (state: RootState) => state.users.user;

// eslint-disable-next-line import/prefer-default-export
export const getUserSelector = createSelector(
    getUserDataSelector,
    (user) => user
);
