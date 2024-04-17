import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
    },
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
