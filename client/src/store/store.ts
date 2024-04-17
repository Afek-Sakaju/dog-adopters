import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import usersSlice from './slices/users.slice';

export default function storeConfig() {
    return configureStore(
        {
            reducer: {
                users: usersSlice.reducer,
            },
        },
        // Only for development uses, delete in production
        composeWithDevTools()
    );
}
