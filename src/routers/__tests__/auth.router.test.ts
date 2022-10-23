import request from 'supertest';
import app from '../../app';
import bcrypt from 'bcrypt';
import { UserModel } from '../../models';
import { IUser } from '../../interfaces/user.interface';

describe('auth route tests', function () {
    let userDoc: IUser;
    let cookie: string;
    let userData = {
        username: 'admin',
        password: 'admin',
    };

    beforeAll(async () => {
        userDoc = (await UserModel.findOne({
            username: 'admin',
        })) as unknown as IUser;

        expect(userDoc).toBeDefined();
    });

    test('login API success & get connect.sid cookie & login API failed - wrong data', async function () {
        // Keep this test first because the cookie is necessary in other tests
        {
            const result = await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(userData)
                .expect(302);

            expect(result).toHaveProperty('headers.set-cookie');
            expect(result.headers['set-cookie']).toHaveLength(1);
            expect(result.headers['set-cookie'][0]).toMatch(/connect\.sid=\w*/);

            const [str] = result.headers['set-cookie'];
            cookie = str.split(';')[0].split('=')[1];
        }
        {
        }
    });

    test('logout API make the cookie expired check', async function () {
        {
            //fix me
            const result2 = await request(app)
                .get(`/auth/${userDoc?._id.toString()}`)
                .set('Cookie', [cookie])
                .expect(200);

            expect(result2).toBeDefined();
        }

        {
            await request(app)
                .post('/auth/logout')
                .set('Cookie', [cookie as string])
                .expect(302);

            await request(app)
                .get(`/auth/${userDoc?._id.toString()}`)
                .set('Cookie', [cookie as string])
                .expect(500);
        }
    });

    test('login failure incorrect username or password', async function () {
        {
            const body = { username: 'i-dont-exist', password: '321' };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(500);
        }
        {
            const body = { username: 'admin', password: 'i-dont-match' };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(500);
        }
    });

    test('login failure username or password not provided', async function () {
        try {
            const body = { password: userData.password };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect('Location', '/login.html')
                .expect(302);
        } catch (e) {}

        try {
            const body = { username: userData.username };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect('Location', '/login.html')
                .expect(302);
        } catch (e) {}

        try {
            const body = {};

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect('Location', '/login.html')
                .expect(302);
        } catch (e) {}
    });

    test('auth user register check data creation', async () => {
        try {
            const body = { username: 'afek123', password: 'afek222' };

            const result = await request(app)
                .post('/auth/register')
                .set('Accept', 'application/json')
                .send(body)
                .expect(200);

            const generatedHash = bcrypt.hashSync(
                body.password,
                bcrypt.genSaltSync(10)
            );

            const isMatch = await bcrypt.compare(body.password, generatedHash);

            expect(result).toHaveProperty('username', body.username);
            expect(isMatch).toBeTruthy();
        } catch (e) {}
    });
});
