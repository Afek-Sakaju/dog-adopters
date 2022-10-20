import request from 'supertest';
import app from '../../app';
import { IUser } from '../../interfaces/user.interface';
import { UserModel } from '../../models';

describe('dogs route tests', function () {
    let user: IUser;
    let cookie: string;

    beforeAll(async () => {
        user = (await UserModel.findOne({ username: 'admin' })) as IUser;
        expect(user).toBeDefined();

        const result = await request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send({ username: 'admin', password: 'admin' })
            .expect(302);

        cookie = result.headers['set-cookie'][0];
    });

    test('responds create dog API - successfully', async function () {
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
        expect(result).toHaveProperty('_body.owner', user?._id.toString());
    });

    test('responds create dog API - failure - missing authenticated user cookie', function (done) {
        const body = {
            owner: null,
            adopter: null,
            race: 'mixed',
            gender: 'M',
            age: 9,
            vaccines: 4,
            behave: ['agressive'],
            name: 'evis',
        };

        request(app)
            .post('/dogs')
            .set('Accept', 'application/json')
            .send(body)
            .expect(500, done);
    });

    test('respond get dog by id API - successfully', async function () {
        const body = {
            owner: null,
            adopter: null,
            race: 'mixed',
            gender: 'F',
            age: 10,
            vaccines: 3,
            behave: ['agressive'],
            name: 'charlie',
        };

        let exampleDogId: string;

        ({
            body: { _id: exampleDogId },
        } = await request(app)
            .post('/dogs')
            .set('Accept', 'application/json')
            .send(body)
            .set('Cookie', [cookie])
            .expect(201));

        const result = await request(app)
            .get(`/dogs/${exampleDogId}`)
            .set('Cookie', [cookie as string])
            .expect(200);

        expect(result).toHaveProperty('_body.race', 'mixed');
        expect(result).toHaveProperty('_body.gender', 'F');
        expect(result).toHaveProperty('_body.age', 10);
        expect(result).toHaveProperty('_body.vaccines', 3);
        expect(result).toHaveProperty('_body.name', 'charlie');
        expect(result).toHaveProperty('_body.behave', ['agressive']);
    });
});
