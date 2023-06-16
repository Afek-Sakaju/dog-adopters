import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: [],
    user: null,
  },
  reducers: {
    initUsersList(state, action) {
      state.usersList = action.payload.usersList;
    },
    initUser(state, action) {
      state.user = action.payload.user;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const {
  initUsersList: initUsersListAction,
  initUser: initUserAction,
  removeUser: removeUserAction,
} = usersSlice.actions;

export default usersSlice;
