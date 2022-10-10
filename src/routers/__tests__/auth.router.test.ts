import request from 'supertest';
import { UserModel } from '../../models';
import app from '../../app';
import { IUser } from '../../interfaces/user.interface';

describe('auth route tests', function () {
    let user: IUser;
    let password = 'pass-123';

    beforeEach(async () => {
        user = (await new UserModel({
            username: 'auth-login-test',
            password,
        }).save()) as unknown as IUser;
    });

    afterEach(async () => {
        if (user._id) {
            await UserModel.findByIdAndDelete(user._id);
        }
    });

    it('responds login API successfully', function (done) {
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

    it('responds login API failure', function (done) {
        const body = { username: user.username, password: `${password}XYZ` };

        request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send(body)
            .expect(500, done);
    });
});
