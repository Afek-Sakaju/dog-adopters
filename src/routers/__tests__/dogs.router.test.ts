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

    test('responds create dog API - success with cookie & failure - missing authenticated user cookie', async function () {
        {
            const body1 = {
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
                .send(body1)
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
        }
        {
            const body2 = {
                owner: null,
                adopter: null,
                race: 'mixed',
                gender: 'M',
                age: 9,
                vaccines: 4,
                behave: ['agressive'],
                name: 'evis',
            };

            await request(app)
                .post('/dogs')
                .set('Accept', 'application/json')
                .send(body2)
                .expect(500);
        }
    });

    test('responds update dog API by his owner - success & failure due to wrong owner', async function () {
        const body = {
            owner: user._id,
            adopter: null,
            race: 'mixed',
            gender: 'F',
            age: 10,
            vaccines: 2,
            behave: ['agressive'],
            name: 'levi',
        };

        const updatedData = {
            gender: 'M',
            age: 11,
            vaccines: 3,
            behave: ['friendly'],
        };

        const result = await request(app)
            .post('/dogs')
            .set('Accept', 'application/json')
            .send(body)
            .set('Cookie', [cookie])
            .expect(201);

        expect(JSON.stringify(result.body.owner)).toBe(
            JSON.stringify(user._id)
        );
        expect(result).toHaveProperty('_body.gender', 'F');
        expect(result).toHaveProperty('_body.age', 10);
        expect(result).toHaveProperty('_body.vaccines', 2);
        expect(result).toHaveProperty('_body.behave', ['agressive']);

        const updatedResult = await request(app)
            .put(`/dogs/${result.body._id}`)
            .set('Accept', 'application/json')
            .send(updatedData)
            .set('Cookie', [cookie])
            .expect(206);

        expect(updatedResult).toHaveProperty('_body.gender', 'M');
        expect(updatedResult).toHaveProperty('_body.age', 11);
        expect(updatedResult).toHaveProperty('_body.vaccines', 3);
        expect(updatedResult).toHaveProperty('_body.behave', ['friendly']);
    });
});
