import Proxy from './proxy';

class UserProxy extends Proxy {
  constructor({ url } = {}) {
    super({ url });
  }

  async getUserByID({ id } = {}) {
    const user = await super.getDataById({ id });
    return user;
  }

  async getAuthenticatedUserData() {
    const path = 'authenticatedUserData';
    const user = await super.getData({ path });
    return user;
  }

  async registerUser({ userData } = {}) {
    const path = 'register';
    const user = await super.post({ userData, path });
    return user;
  }

  async loginUser({ userData } = {}) {
    const path = 'login';
    const user = await super.post({ userData, path });
    return user;
  }

  async logoutUser() {
    const path = 'logout';
    const user = await super.post({ path });
    return user;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const AuthProxy = new UserProxy(process.env.AUTH_URL);
