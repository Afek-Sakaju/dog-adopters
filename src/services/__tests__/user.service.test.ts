import request from 'supertest';
import app from '../../app';
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
    });

    test('get user by id return user doc with data', async () => {
        const res = (await getUserById(user._id)) as IUser;
        expect(res).toBeDefined();

        const isMatch = bcrypt.compareSync(
            data.password,
            userWithPassword.password
        );

        expect(res).toHaveProperty('username', 'testUser');
        expect(isMatch).toBeTruthy();
        expect(res).toHaveProperty('fullName', 'petrick-stars');
    });
});
