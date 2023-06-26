export default class AuthProxy extends Proxy {
  async getUserByID(id) {
    const user = await super.getDataById(id);
    return user;
  }

  async getAuthenticatedUserData() {
    const user = await super.getData('authenticatedUserData');
    return user;
  }

  async createUser(userData) {
    const path = 'register';
    const user = await super.post(userData, path);
    return user;
  }
}
