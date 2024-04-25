import { configureStore } from '@reduxjs/toolkit';

import usersSlice, { type UsersState } from './slices/users.slice';

export interface RootState {
    users: UsersState;
}

export default function storeConfig() {
    return configureStore({
        reducer: {
            users: usersSlice.reducer,
        },
    });
}
