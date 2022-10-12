import request from 'supertest';
import app from '../../app';
import { UserModel } from '../../models';

describe('auth route tests', function () {
    const username = 'admin';
    const password = 'admin';
    let cookie: string;

    test('responds login API successfully with connect.sid cookie', function (done) {
        const body = { username, password };

        request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send(body)
            .expect(302)
            .end((err, res) => {
                expect(err).toBe(null);
                expect(res).toHaveProperty('headers.set-cookie');
                expect(res.headers['set-cookie']).toHaveLength(1);
                expect(res.headers['set-cookie'][0]).toMatch(
                    /connect\.sid=\w*/
                );
                [cookie] = res.headers['set-cookie'][0];
                done();
            });
    });

    test('logout expire the cookie', async function () {
        const user = await UserModel.findOne({ username: 'admin' });
        expect(user).toBeDefined();

        const result = await request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send({ username: 'admin', password: 'admin' })
            .expect(302);

        const cookie = result.headers['set-cookie'][0];

        {
            const responseUser = await request(app)
                .get(`/auth/${user?._id.toString()}`)
                .set('Cookie', [cookie as string])
                .expect(200);

            expect(responseUser).toBeDefined();
        }

        await request(app)
            .post('/auth/logout')
            .set('Cookie', [cookie as string])
            .expect(302);

        {
            await request(app)
                .get(`/auth/${user?._id.toString()}`)
                .set('Cookie', [cookie as string])
                .expect(500);
        }
    });

    test('login failure incorrect username or password', async function () {
        {
            const body = { username: 'i-dont-exist', password };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(500);
        }
        {
            const body = { username, password: 'i-dont-match' };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(500);
        }
    });

    test('login failure username or password not provided', async function () {
        try {
            const body = { password };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect('Location', '/login.html')
                .expect(302);
        } catch (e) {}

        try {
            const body = { username };

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

    // todo: create register test
});
