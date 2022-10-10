import request from 'supertest';
import { UserModel } from '../../models';
import app from '../../app';
import { IUser } from '../../interfaces/user.interface';

describe('dogs route tests', function () {
    let user: IUser;
    let password = 'pass-1234567';
    let cookie: string;

    beforeEach(async () => {
        user = (await new UserModel({
            username: 'dog-auth-user-test',
            password,
        }).save()) as unknown as IUser;

        const result = await request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send({ username: user.username, password });

        cookie = result.headers['set-cookie'][0];
    });
    afterEach(() => {
        UserModel.findByIdAndDelete(user._id);
    });

    it('responds create dog API - successfully', async function () {
        const body = {
            adopter: null,
            race: 'mixed',
            gender: 'M',
            age: 9,
            vaccines: 4,
            behave: ['agressive'],
            name: 'avis',
        };

        const result = await request(app)
            .post('/dogs')
            .set('Accept', 'application/json')
            .send(body)
            .set('Cookie', [cookie])
            .expect(201);

        expect(result).toHaveProperty('_body._id');
        expect(result).toHaveProperty('_body.name', body.name);
        expect(result).toHaveProperty('_body.owner', user._id.toString());
    });

    it('responds create dog API - failure - missing authenticated user cookie', function (done) {
        const body = {
            owner: null,
            adopter: null,
            race: 'mixed',
            gender: 'M',
            age: 9,
            vaccines: 4,
            behave: ['agressive'],
            name: 'avis',
        };

        request(app)
            .post('/dogs')
            .set('Accept', 'application/json')
            .send(body)
            .expect(500, done);
    });
});
