import { IUser } from '../../interfaces/user.interface';
import { UserModel } from '../../models';
import { getUserById, createNewUser, getUserByUsername } from '../user.service';
import bcrypt from 'bcrypt';

describe('user services tests', () => {
    let data = {
        username: 'testUser',
        password: 'testUser123',
        fullName: 'petrick-stars',
    };

    let userWithPassword: IUser;
    let user: IUser;

    beforeAll(async () => {
        const userDoc = new UserModel(data);

        user = (await userDoc.save()) as unknown as IUser;
        expect(user).toBeDefined();

        userWithPassword = (await getUserByUsername(
            'testUser'
        )) as unknown as IUser;

        expect(userWithPassword).toBeDefined();
        expect(userWithPassword._id).toBeDefined();
        expect(userWithPassword).toHaveProperty('password');
        expect(userWithPassword).toHaveProperty('username');
        expect(userWithPassword.fullName).toBeUndefined();
        expect(userWithPassword.isAdmin).toBeUndefined();
        expect(userWithPassword.phoneNumber).toBeUndefined();
    });

    test('get user by id return user doc with data', async () => {
        const res = (await getUserById(user._id)) as IUser;

        const isMatch = bcrypt.compareSync(
            data.password,
            userWithPassword.password
        );

        expect(res).toBeDefined();
        expect(res).toHaveProperty('username', 'testUser');
        expect(isMatch).toBeTruthy();
        expect(res).toHaveProperty('fullName', 'petrick-stars');
    });

    test('get user by id return user doc with data', async () => {
        const newUserData = {
            username: 'aviv',
            password: 'aviv222',
            fullName: 'aviv-kohavii',
            phoneNumber: '050-111-1111',
        } as IUser;

        const res = (await createNewUser(newUserData)) as IUser;
        const { password: hashedPassword } = (await getUserByUsername(
            'aviv'
        )) as IUser;

        const isMatch = bcrypt.compareSync(
            newUserData.password,
            hashedPassword
        );

        expect(res).toBeDefined();
        expect(isMatch).toBeTruthy();
        expect(res).toHaveProperty('username', newUserData.username);
        expect(res).toHaveProperty('fullName', newUserData.fullName);
        expect(res).toHaveProperty('phoneNumber', newUserData.phoneNumber);
    });
});
