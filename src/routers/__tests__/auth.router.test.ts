import request from 'supertest';
import { UserModel } from '../../models';
import app from '../../app';
import { IUser } from '../../interfaces/user.interface';

describe('auth route tests', function () {
    let user: IUser;
    const username = 'auth-login-test';
    const password = 'pass-123';

    beforeEach(async () => {
        user = (await new UserModel({
            username,
            password,
        }).save()) as unknown as IUser;
    });

    afterEach(async () => {
        if (user._id) {
            await UserModel.findByIdAndDelete(user._id);
        }
    });

    test('responds login API successfully', function (done) {
        const body = { username: user.username, password };

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

    test('login failure incorrect password', function (done) {
        const body = { username, password: `${password}XYZ` };

        request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send(body)
            .expect(500, done);
    });

    test('login failure username not exist', function (done) {
        const body = { username: 'i-dont-exist', password };

        request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send(body)
            .expect(500, done);
    });
});
