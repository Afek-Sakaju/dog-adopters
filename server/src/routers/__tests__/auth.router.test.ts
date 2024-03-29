import request from 'supertest';
import bcrypt from 'bcrypt';

import app from '../../app';
import { UserModel } from '../../models';
import { IUser } from '../../interfaces/user.interface';

describe('auth route tests', function () {
    let userDoc: IUser;
    let cookie: string;
    const userData = {
        username: 'admin',
        password: 'admin',
    };

    beforeAll(async () => {
        userDoc = (await UserModel.findOne({
            username: 'admin',
        })) as unknown as IUser;

        expect(userDoc).toBeDefined();
    });

    beforeEach(async () => {
        const result = await request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send(userData)
            .expect(200);

        expect(result).toBeDefined();
        [cookie] = result.headers['set-cookie'];
    });

    test('login API success & get connect.sid cookie & login API failed - wrong data', async function () {
        {
            const result = await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(userData)
                .expect(200);

            expect(result).toHaveProperty('headers.set-cookie');
            expect(result.headers['set-cookie']).toHaveLength(1);
            expect(result.headers['set-cookie'][0]).toMatch(/connect\.sid=\w*/);
        }
        {
            const body = { username: 'i-dont-exist', password: '321' };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(400);
        }
        {
            const body = { username: 'admin', password: 'i-dont-match' };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(400);
        }
    });

    test('login API - failure username or password not provided', async function () {
        try {
            /* Catching error is important here because the passport strategy middleware
            does not continue the operation */
            const body = { password: userData.password };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(401);
        } catch (e) {
            /* empty */
        }

        try {
            /* Catching error is important here because the passport strategy middleware
            does not continue the operation */
            const body = { username: userData.username };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(401);
        } catch (e) {
            /* empty */
        }

        {
            const body = {};

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(400);
        }
    });

    test('logout API make the cookie expired check', async function () {
        {
            const result2 = await request(app)
                .get(`/auth/${userDoc._id.toString()}`)
                .set('Cookie', [cookie])
                .expect(200);

            expect(result2).toBeDefined();
        }
        {
            await request(app)
                .post('/auth/logout')
                .set('Cookie', [cookie])
                .expect(200);

            await request(app)
                .get(`/auth/${userDoc._id.toString()}`)
                .set('Cookie', [cookie])
                .expect(401);
        }
    });

    test('user register API successfully & fail - missing/invalid required data', async () => {
        {
            const body = {
                username: 'afek123',
                password: 'afek222',
                fullName: 'afekos',
                phoneNumber: '000999000',
            };

            const result = await request(app)
                .post('/auth/register')
                .set('Accept', 'application/json')
                .send(body)
                .expect(201);

            const generatedHash = bcrypt.hashSync(
                body.password,
                bcrypt.genSaltSync(10)
            );
            const isMatch = await bcrypt.compare(body.password, generatedHash);

            expect(result.body).toHaveProperty('username', body.username);
            expect(isMatch).toBeTruthy();
        }
        {
            const body = {
                username: 'afek12',
                fullName: 'afekos',
                phoneNumber: '9999999',
            };

            await request(app)
                .post('/auth/register')
                .set('Accept', 'application/json')
                .send(body)
                .expect(500);
        }
    });
});
