import request from 'supertest';
import app from '../../app';

describe('auth route tests', function () {
    const username = 'admin';
    const password = 'admin';

    test('responds login API successfully', function (done) {
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
                done();
            });
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
            const body = { username, password: `${password}XYZ` };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect(500);
        }
    });

    test('login failure username or password not provided', async function () {
        {
            const body = { password };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect('Location', '/login.html')
                .expect(302);
        }
        {
            const body = { username };

            await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect('Location', '/login.html')
                .expect(302);
        }
    });
});
