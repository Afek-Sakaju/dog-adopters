export default class AuthProxy extends Proxy {
  async getUserByID(id) {
    const user = await super.getDataById(id);
    return user;
  }

  // getAuthenticatedUserData;

  // getUsers;

  // createUser;

  // updateUserById;

  // deleteUserById;
}
