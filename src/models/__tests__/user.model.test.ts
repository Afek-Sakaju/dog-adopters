import { createNewUser } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { UserModel } from '../../models/user.model';
import bcrypt from 'bcrypt';

describe('user model tests', () => {
    test('isAdmin field should set to false by default', async () => {
        const userTest = {
            username: 'user-model-test-is-admin-false',
            password: 'admin123',
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', false);
    });

    test('creating a new user should hash his text password', async () => {
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

    test('isAdmin flag set', async () => {
        const userTest = {
            username: 'user-model-test-is-admin',
            password: 'admin123',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', true);
    });

    test('fullName field can be set at the creation of user', async () => {
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
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('fullName', 'Anonymous');
    });

    test('username check at the creation of new user', async () => {
        const userTest = {
            username: 'harry',
            password: 'potter',
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('username', 'harry');
    });

    test('password comaprison check with b-crypt', async () => {
        const userTest = {
            username: 'harry',
            password: 'mcguire',
        } as IUser;

        const generatedHash = bcrypt.hashSync(
            userTest.password,
            bcrypt.genSaltSync(10)
        );

        const isMatch = bcrypt.compareSync(userTest.password, generatedHash);

        expect(isMatch).toBeTruthy();
    });

    test('password comaprison check with b-crypt', async () => {
        const userTest = {
            username: 'harry',
            password: 'mcguire',
        } as IUser;

        const generatedHash = bcrypt.hashSync(
            userTest.password,
            bcrypt.genSaltSync(10)
        );

        const isMatch = bcrypt.compareSync(userTest.password, generatedHash);

        expect(isMatch).toBeTruthy();
    });
});
