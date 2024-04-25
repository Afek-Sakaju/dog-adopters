import type { User } from '@/types';
import BaseProxy from './proxy';

type FetchUserByIdProps = { id?: string };
type FetchUserByUserDataProps = { userData: User };

export default class UserDataProxy extends BaseProxy {
    async getUserByID({ id }: FetchUserByIdProps): Promise<User> {
        const user: User = await super.getDataById({ id });
        return user;
    }

    async getAuthenticatedUserData(): Promise<User> {
        const path: string = 'authenticatedUserData';
        const user: User = await super.getData({ path });
        return user;
    }

    async registerUser({ userData }: FetchUserByUserDataProps): Promise<User> {
        const path: string = 'register';
        const user: User = await super.post({ data: userData, path });
        return user;
    }

    async loginUser({ userData }: FetchUserByUserDataProps): Promise<User> {
        const path: string = 'login';
        const user: User = await super.post({ data: userData, path });
        return user;
    }

    async logoutUser(): Promise<User> {
        const path: string = 'logout';
        const user: User = await super.post({ path });
        return user;
    }
}
