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
    changeUser(state, action) {
      const { id } = action.payload;
      const user = state.usersList.find((u) => u.id === id);
      state.user = user;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const {
  initUsersList: initUsersListAction,
  initUser: initUserAction,
  changeUser: changeUserAction,
  removeUser: removeUserAction,
} = usersSlice.actions;

export default usersSlice;
