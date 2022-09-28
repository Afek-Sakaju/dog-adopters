import { UserModel } from '../index';
// jest.setTimeout(30000);

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
