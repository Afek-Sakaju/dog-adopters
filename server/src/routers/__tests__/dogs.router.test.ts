import request from 'supertest';

import app from '../../app';
import { IDog } from '../../interfaces/dog.interface';
import { IUser } from '../../interfaces/user.interface';
import { DogModel, UserModel } from '../../models';

describe('dogs route tests', function () {
    let exampleUserDoc: IUser;
    let exampleDogDoc: IDog;
    let cookie: string;
    let exampleDogId: string;
    let exampleDogBody: IDog;

    beforeAll(async () => {
        exampleUserDoc = (await UserModel.findOne({
            username: 'admin',
        })) as IUser;
        expect(exampleUserDoc).toBeDefined();

        const result = await request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send({ username: 'admin', password: 'admin' })
            .expect(200);

        cookie = result.headers['set-cookie'][0];

        exampleDogBody = {
            owner: exampleUserDoc._id,
            adopter: null,
            breed: 'mixed',
            gender: 'M',
            age: 10,
            isVaccinated: true,
            characteristics: ['agressive'],
            name: 'charlie',
            notes: 'Love to eat fish, but when he eats bread, he get uncomfortable and start sneezing',
        } as unknown as IDog;

        const dog = new DogModel(exampleDogBody);
        const result2 = (await dog.save()) as unknown as IDog;

        exampleDogDoc = result2;
        exampleDogId = exampleDogDoc._id;
    });

    test('create dog API - success & failure (unauthenticated-missing cookie)', async function () {
        {
            const body = {
                owner: null,
                adopter: null,
                breed: 'mixed',
                gender: 'M',
                age: 5,
                isVaccinated: false,
                characteristics: ['agressive'],
                name: 'winstone',
                notes: 'Love other dogs but afraid of other dogs that are bigger then him, after traumatic event',
            } as unknown as IDog;

            const result = await request(app)
                .post('/dogs')
                .set('Accept', 'application/json')
                .send(body)
                .set('Cookie', [cookie])
                .expect(201);

            expect(result).toHaveProperty('_body.breed', body.breed);
            expect(result).toHaveProperty('_body.gender', body.gender);
            expect(result).toHaveProperty('_body.age', body.age);
            expect(result).toHaveProperty('_body.notes', body.notes);
            expect(result).toHaveProperty(
                '_body.isVaccinated',
                body.isVaccinated
            );
            expect(result).toHaveProperty('_body.name', body.name);
            expect(result).toHaveProperty(
                '_body.characteristics',
                body.characteristics
            );
        }
        {
            const body = {
                owner: null,
                adopter: null,
                breed: 'mixed',
                gender: 'M',
                age: 9,
                isVaccinated: true,
                characteristics: ['agressive'],
                name: 'evis',
            };

            await request(app)
                .post('/dogs')
                .set('Accept', 'application/json')
                .send(body)
                .expect(401);
        }
    });

    test('get dog by id API - success & failure (wrong id/missing cookie)', async function () {
        {
            const result = await request(app)
                .get(`/dogs/${exampleDogId}`)
                .set('Cookie', [cookie as string])
                .expect(200);

            expect(result).toHaveProperty('_body.breed', 'mixed');
            expect(result).toHaveProperty('_body.gender', 'M');
            expect(result).toHaveProperty('_body.age', 10);
            expect(result).toHaveProperty(
                '_body.notes',
                'Love to eat fish, but when he eats bread, he get uncomfortable and start sneezing'
            );
            expect(result).toHaveProperty('_body.isVaccinated', true);
            expect(result).toHaveProperty('_body.name', 'charlie');
            expect(result).toHaveProperty('_body.characteristics', [
                'agressive',
            ]);
        }
    });

    test('update dog API - success with admin/owner & failure - wrong owner', async function () {
        {
            const updatedData = {
                gender: 'M',
                age: 11,
                isVaccinated: false,
                characteristics: ['friendly'],
                isDesexed: true,
            };

            const updatedResult = await request(app)
                .put(`/dogs/${exampleDogId}`)
                .set('Accept', 'application/json')
                .send(updatedData)
                .set('Cookie', [cookie])
                .expect(206);

            expect(updatedResult).toHaveProperty('_body.name', 'charlie');
            expect(updatedResult).toHaveProperty('_body.gender', 'M');
            expect(updatedResult).toHaveProperty('_body.age', 11);
            expect(updatedResult).toHaveProperty('_body.isVaccinated', false);
            expect(updatedResult).toHaveProperty(
                '_body.notes',
                'Love to eat fish, but when he eats bread, he get uncomfortable and start sneezing'
            );
            expect(updatedResult).toHaveProperty('_body.isDesexed', true);
            expect(updatedResult).toHaveProperty('_body.characteristics', [
                'friendly',
            ]);
        }
        {
            await request(app)
                .post('/auth/logout')
                .set('Cookie', cookie)
                .expect(200);

            const result = await request(app)
                .post('/auth/login')
                .set('Accepts', 'application/json')
                .send({ username: 'user111', password: 'user111' })
                .expect(200);

            const cookie2 = result.headers['set-cookie'][0];

            const updatedData = {
                gender: 'M',
                age: 9,
                isVaccinated: true,
                characteristics: ['friendly'],
                isDesexed: true,
            };

            await request(app)
                .put(`/dogs/${exampleDogId}`)
                .set('Accept', 'application/json')
                .set('Cookie', [cookie2])
                .send(updatedData)
                .expect(401);
        }
        {
            const updatedData = {
                gender: 'M',
                age: 8,
                isVaccinated: false,
                characteristics: ['friendly'],
            };

            await request(app)
                .put(`/dogs/${exampleDogId}`)
                .set('Accept', 'application/json')
                .send(updatedData)
                .expect(401);
        }
        {
            await request(app).get(`/dogs/afek6+5`).expect(500);
        }
    });

    test('get dogs filter list API - success & empty page check & fail with wrong query check', async function () {
        {
            const url =
                '/dogs?page=1&itemsPerPage=10&breed=Laotian&sortByGender=1&sortByAge=1';

            const {
                body: { data: filteredList },
            } = await request(app).get(url).expect(200);

            expect(filteredList.length).toBe(3);

            filteredList.forEach((dog: IDog) => {
                expect(dog).toHaveProperty('breed', 'Laotian');
            });

            const ageSortCheck =
                filteredList[0].age <= filteredList[1].age &&
                filteredList[1].age <= filteredList[2].age;
            expect(ageSortCheck).toBeTruthy();
        }
        {
            const url =
                '/dogs?page=1&itemsPerPage=20&gender=F&sortByAge=1&sortByName=1';

            const {
                body: { data: filteredList },
            } = await request(app).get(url).expect(200);

            expect(filteredList.length).toBe(13);

            filteredList.forEach((dog: IDog) => {
                expect(dog).toHaveProperty('gender', 'F');
            });
        }
        {
            const url =
                '/dogs?page=2&itemsPerPage=10&breed=Laotian&sortByGender=1&sortByAge=1';

            const {
                body: { data: filteredList },
            } = await request(app).get(url).expect(200);

            expect(filteredList.length).toBe(0);
        }
        {
            const url =
                '/dogs?page=1000&itemsPerPage=1000&breed=Laotian&sortByGender=1&sortByAge=1';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?breed=1&sortByGender=hello&sortByAge=1';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?status=notNumber';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?minAge=notNumber';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?maxAge=notNumber';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?sortByStatus=3';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?page=-99';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?sortByRace=2';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?sortByRace=yes';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?sortByAge=yes';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?sortByName=yes';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?sortByLastUpdated=yes';

            await request(app).get(url).expect(500);
        }
        {
            const url = '/dogs?sortByLastUpdated=2';

            await request(app).get(url).expect(500);
        }
    });

    test('get distinct breeds list API - success', async function () {
        {
            const result = await request(app).get('/dogs/breeds').expect(200);
            const list: string[] = result.body;

            const allRaces = {
                Aleut: 1,
                'American Indian and Alaska Native (AIAN)': 1,
                'Alaskan Athabascan': 1,
                'Asian Indian': 1,
                'Black or African American': 1,
                'Costa Rican': 1,
                Chilean: 1,
                Ute: 1,
                mixed: 1,
                Micronesian: 1,
                Menominee: 1,
                Mexican: 1,
                'South American': 1,
                'Native Hawaiian': 1,
                Yuman: 1,
                Venezuelan: 1,
                Japanese: 1,
                Laotian: 1,
                Panamanian: 1,
                Ottawa: 1,
            };

            let includeRaces = true;

            for (const breed of list) {
                // eslint-disable-next-line no-prototype-builtins
                if (!allRaces.hasOwnProperty(breed)) {
                    includeRaces = false;
                    break;
                }
            }

            expect(includeRaces).toBeTruthy();
            expect(list.length).toBe(20);
        }
    });

    test('delete dog by id API success & fail - wrong owner/not admin/logged out', async function () {
        const userDoc = (await UserModel.findOne({
            username: 'user111',
        })) as IUser;
        expect(userDoc).toBeDefined();

        const loginResult = await request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send({ username: 'user111', password: 'user111' })
            .expect(200);
        expect(loginResult).toBeDefined();

        const cookie = loginResult.headers['set-cookie'][0];

        const body = {
            owner: userDoc._id,
            adopter: null,
            breed: 'mixed',
            gender: 'M',
            age: 6,
            isVaccinated: true,
            characteristics: ['agressive'],
            name: 'appa',
            isDesexed: true,
        } as unknown as IDog;

        const dogCreation = await request(app)
            .post('/dogs')
            .set('Accept', 'application/json')
            .send(body)
            .set('Cookie', [cookie])
            .expect(201);
        expect(dogCreation).toBeDefined();

        await request(app)
            .delete(`/dogs/${dogCreation.body._id}`)
            .set('Cookie', [cookie])
            .expect(200);

        const dogCreation2 = await request(app)
            .post('/dogs')
            .set('Accept', 'application/json')
            .send(body)
            .set('Cookie', [cookie])
            .expect(201);
        expect(dogCreation2).toBeDefined();

        {
            await request(app)
                .delete(`/dogs/${dogCreation2.body._id}`)
                .expect(401);
        }
        {
            await request(app)
                .post('/auth/logout')
                .set('Cookie', [cookie])
                .expect(200);

            await request(app)
                .delete(`/dogs/${dogCreation2.body._id}`)
                .set('Cookie', [cookie])
                .expect(401);
        }
        {
            const result = await request(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
                .send({ username: 'admin', password: 'admin' })
                .expect(200);
            expect(result).toBeDefined();

            const cookie = result.headers['set-cookie'][0];

            await request(app)
                .delete(`/dogs/${dogCreation2.body._id}`)
                .set('Cookie', [cookie])
                .expect(200);
        }
    });
});
