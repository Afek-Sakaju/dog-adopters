import request from 'supertest';
import app from '../../app';
import { IUser } from '../../interfaces/user.interface';
import { UserModel } from '../../models';
import { getUserById, createNewUser, getUserByUsername } from '../user.service';
import bcrypt from 'bcrypt';

describe('user services tests', () => {
    test('get user by id return user doc', async () => {
        const doc = (await UserModel.findOne({
            username: 'admin',
        })) as IUser;

        const res = (await getUserById(doc._id)) as IUser;

        const isMatch = bcrypt.compareSync(res.password, doc.password);

        expect(res).toHaveProperty('username', 'admin');
        expect(isMatch).toBeTruthy();
        expect(res).toHaveProperty('fullName', 'akef');
        expect(res).toHaveProperty('isAdmin', true);
    });
});
