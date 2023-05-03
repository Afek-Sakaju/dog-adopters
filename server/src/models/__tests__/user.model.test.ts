import { createNewUser } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { UserModel } from '../user.model';
import bcrypt from 'bcrypt';

describe('user model tests', () => {
    test('isAdmin true flag set', async () => {
        const userTest = {
            username: 'user-model-test-is-admin',
            password: 'admin123',
            isAdmin: true,
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', true);
    });

    test('isAdmin set to false by default', async () => {
        const userTest = {
            username: 'user-model-test-is-admin-false',
            password: 'admin123',
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('isAdmin', false);
    });

    test('fullName field can be set at the creation of user', async () => {
        const userTest = {
            username: 'user-model-test-fullname',
            password: 'admin123',
            fullName: 'test-user',
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

    test("username at the user's registeration check", async () => {
        const userTest = {
            username: 'harry',
            password: 'potter',
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('username', 'harry');
    });

    test('hash new user password from text', async () => {
        const userTest = {
            username: 'dog-adopter-user-test',
            password: 'hahaha',
        };

        const userDoc = new UserModel(userTest);
        const res = await userDoc.save();

        expect(res.password).toBeDefined();
        expect(res.password).not.toBe(userTest.password);
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

    test('phoneNumber set at registeration check', async () => {
        const userTest = {
            username: 'david1',
            password: 'the-king',
            phoneNumber: '+972901234567',
        } as IUser;

        const res = await createNewUser(userTest);

        expect(res).toHaveProperty('phoneNumber', '+972901234567');
    });

    test('phoneNumber have no default if not set at registeration', async () => {
        const userTest = {
            username: 'phoneNumberTest',
            password: 'phoneNumber112',
        } as IUser;

        const res = (await createNewUser(userTest)) as IUser;

        expect(res.phoneNumber).toBeUndefined();
    });

    test("register user'.toJSON()' won't return password field", async () => {
        const userTest = {
            username: 'testUser5',
            password: 'testUser56',
        } as IUser;

        const res = (await createNewUser(userTest)) as IUser;

        expect(res.password).toBeUndefined();
    });
});
