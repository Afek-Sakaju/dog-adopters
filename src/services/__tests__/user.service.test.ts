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

    let user: IUser;

    beforeAll(async () => {
        const userDoc = new UserModel(data);
        user = (await userDoc.save()) as unknown as IUser;

        expect(user).toBeDefined();
    });

    test('get user with only username password and id', async () => {
        const resultUser = (await getUserByUsername(
            'testUser'
        )) as unknown as IUser;

        expect(resultUser).toBeDefined();
        expect(resultUser._id).toBeDefined();
        expect(resultUser).toHaveProperty('password');
        expect(resultUser).toHaveProperty('username');
        expect(resultUser.fullName).toBeUndefined();
        expect(resultUser.isAdmin).toBeUndefined();
        expect(resultUser.phoneNumber).toBeUndefined();
    });

    test('get user by id return user doc with data', async () => {
        const res = (await getUserById(user._id)) as IUser;

        const generatedHash = bcrypt.hashSync(
            data.password,
            bcrypt.genSaltSync(10)
        );

        const isMatch = await bcrypt.compare(data.password, generatedHash);

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

        const generatedHash = bcrypt.hashSync(
            newUserData.password,
            bcrypt.genSaltSync(10)
        );

        const isMatch = await bcrypt.compare(
            newUserData.password,
            generatedHash
        );

        expect(res).toBeDefined();
        expect(isMatch).toBeTruthy();
        expect(res).toHaveProperty('username', newUserData.username);
        expect(res).toHaveProperty('fullName', newUserData.fullName);
        expect(res).toHaveProperty('phoneNumber', newUserData.phoneNumber);
    });
});
