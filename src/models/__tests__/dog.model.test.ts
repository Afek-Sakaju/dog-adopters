import { faker } from '@faker-js/faker'; // https://www.npmjs.com/package/@faker-js/faker
import { createNewDog } from '../../services/dog.service';
import { createNewUser } from '../../services/user.service';
import { IDog } from '../../interfaces/dog.interface';
import { IUser } from '../../interfaces/user.interface';

// todo: Need to think how to decrease this amount of tests - the db failed on timeout connection in 1m !?
//       Consider to combine the tests into one test for checking each field
//       Currently it's in skip mode
describe.skip('dog model tests', () => {
    jest.setTimeout(60 * 1000);

    test.each([
        ['owner', undefined],
        ['race', undefined],
        ['age', undefined],
        ['name', 'nameless'],
        ['image', '/static/dog_default.png'],
        ['adopter', null],
        ['behave', []],
        ['status', 0],
        ['vaccines', 0],
        ['adoptionAt', new Date(0)],
    ])(
        `testing set default value for field '%s' expect to default value: '%s'`,
        async (filed, value) => {
            const res = await createNewDog({
                name: faker.name.firstName(),
                gender: faker.helpers.arrayElement(['F', 'M']),
            } as unknown as IDog);

            if (value) {
                expect(res).toHaveProperty(filed, value);
            } else {
                expect(res).not.toHaveProperty(filed);
            }
        }
    );

    test.each([
        ['name', 'zvika'],
        ['gender', 'F'],
        ['gender', 'M'],
        ['race', 'sausage-dog'],
        ['age', 3],
        ['name', 'testdog'],
        [
            'image',
            'https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/',
        ],
        ['behave', ['friendly', 'kind']],
        ['status', 1],
        ['vaccines', 8],
        ['adoptionAt', new Date(2019, 8, 20)],
    ])(
        `testing set value for field '%s' expect to default value: '%s'`,
        async (filed, value) => {
            const res = await createNewDog({
                name: faker.name.firstName(),
                gender: faker.helpers.arrayElement(['F', 'M']),
                [filed]: value,
            } as unknown as IDog);

            if (value) {
                expect(res).toHaveProperty(filed, value);
            } else {
                expect(res).not.toHaveProperty(filed);
            }
        }
    );

    test('owner field set at the creation of dog', async () => {
        const ownerTest = {
            username: 'tzvika',
            password: 'hadar',
        } as IUser;

        const { _id: ownerId } = (await createNewUser(ownerTest)) as IUser;

        const dogTest = {
            name: 'sky',
            gender: 'F',
            owner: ownerId,
        } as unknown as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res.owner).toHaveProperty('_id', ownerId);
    });

    test('adopter field set at the creation of dog', async () => {
        const adopterTest = {
            username: 'zvika',
            password: 'pik',
        } as IUser;

        const { _id: adopterId } = (await createNewUser(adopterTest)) as IUser;

        const dogTest = {
            name: 'sky',
            gender: 'F',
            adopter: adopterId,
        } as unknown as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res.adopter).toHaveProperty('_id', adopterId);
    });
});
