import BaseProxy from './proxy';

export default class UserDataProxy extends BaseProxy {
    async getUserByID({ id }) {
        const user = await super.getDataById({ id });
        return user;
    }

    async getAuthenticatedUserData() {
        const path = 'authenticatedUserData';
        const user = await super.getData({ path });
        return user;
    }

    async registerUser({ userData }) {
        const path = 'register';
        const user = await super.post({ data: userData, path });
        return user;
    }

    async loginUser({ userData }) {
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
