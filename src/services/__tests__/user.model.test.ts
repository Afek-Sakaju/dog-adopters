import { createNewUser } from '../user.service';
import { IUser } from '../../interfaces/user.interface';
import { UserModel } from '../../models/user.model';

describe('bcrypt - hash password tests', () => {
    test('create a new user should hash his password', async () => {
        const userTest = {
            username: 'dog-adopter-user-test',
            password: 'hahaha',
        };

        const userDoc = new UserModel(userTest);
        const res = await userDoc.save();

        expect(res).toHaveProperty('username', userTest.username);
        expect(res.password).toBeDefined();
        expect(res.password).not.toBe(userTest.password);
    });
});

describe('user model tests', () => {
    test('isAdmin flag not set', async () => {
        const userTest = {
            username: 'user-model-test-is-admin-false',
            password: 'admin123',
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', false);
    });

    test('isAdmin flag set', async () => {
        const userTest = {
            username: 'user-model-test-is-admin',
            password: 'admin123',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', true);
    });

    test(`fullName field set`, async () => {
        const userTest = {
            username: 'user-model-test-fullname',
            password: 'admin123',
            fullName: 'test-user',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('fullName', userTest.fullName);
    });

    test(`fullName field default is 'Anonymous'`, async () => {
        const userTest = {
            username: 'user-model-test-fullname-default',
            password: 'admin123',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('fullName', 'Anonymous');
    });
});
