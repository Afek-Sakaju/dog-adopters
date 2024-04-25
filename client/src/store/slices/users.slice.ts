import { createSlice } from '@reduxjs/toolkit';

import type { User } from '@/types';

export interface UsersState {
    user: User | null;
}

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
    } as UsersState,
    reducers: {
        initUser(state, action) {
            state.user = action.payload.user;
        },
        removeUser(state) {
            state.user = null;
        },
    },
});

export const { initUser: initUserAction, removeUser: removeUserAction } =
    usersSlice.actions;

export default usersSlice;
