import { createNewDog } from '../../services/dog.service';
import { createNewUser } from '../../services/user.service';
import { IDog } from '../../interfaces/dog.interface';
import { IUser } from '../../interfaces/user.interface';

describe('dog model tests', () => {
    test('owner field is not required and have no default', async () => {
        const dogTest = {
            name: 'sky',
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res.owner).toBeUndefined();
    });

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

    test("adopter field set to default value 'null'", async () => {
        const dogTest = {
            name: 'test',
            gender: 'M',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('adopter', null);
    });

    test('adoptionAt field set at creation check', async () => {
        const adoptionDate = new Date(2019, 8, 20);

        const dogTest = {
            name: 'test',
            gender: 'M',
            adoptionAt: adoptionDate,
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('adoptionAt', adoptionDate);
    });

    test('adoptionAt field set to date(0) default if no value given', async () => {
        const dogTest = {
            name: 'test',
            gender: 'M',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('adoptionAt', new Date(0));
    });

    test('race field set at creation check', async () => {
        const dogTest = {
            name: 'test',
            gender: 'M',
            race: 'sausage-dog',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('race', 'sausage-dog');
    });

    test("race field won't be defined by default if there isn't value ", async () => {
        const dogTest = {
            name: 'test',
            gender: 'M',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res.race).toBeUndefined();
    });

    test("gender field set to 'M' at creation check", async () => {
        const dogTest = {
            name: 'test',
            gender: 'M',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('gender', 'M');
    });

    test("gender field set to 'F' at creation check", async () => {
        const dogTest = {
            name: 'test',
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('gender', 'F');
    });

    test('age field set at creation check', async () => {
        const dogTest = {
            name: 'test',
            age: 3,
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('age', 3);
    });

    test("age field won't be defined by default if there isn't value", async () => {
        const dogTest = {
            name: 'test',
            gender: 'M',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res.age).toBeUndefined();
    });

    test('vaccines field set at creation check', async () => {
        const dogTest = {
            name: 'test',
            vaccines: 8,
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('vaccines', 8);
    });

    test('vaccines field set to 0 by default if no value given at creation', async () => {
        const dogTest = {
            name: 'test',
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('vaccines', 0);
    });

    test('behave field set at creation check', async () => {
        const behaveList = ['friendly', 'kind'];

        const dogTest = {
            name: 'test',
            gender: 'M',
            behave: behaveList,
        } as IDog;

        const res = await createNewDog(dogTest);

        expect(res).toHaveProperty('behave', behaveList);
    });

    test('behave field set to [] by default if no value given at creation', async () => {
        const dogTest = {
            name: 'test',
            gender: 'M',
        } as IDog;

        const res = await createNewDog(dogTest);

        expect(res).toHaveProperty('behave', []);
    });

    test('image field set at the creation check', async () => {
        const imageUrl =
            'https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/';

        const dogTest = {
            name: 'testdog',
            gender: 'F',
            image: imageUrl,
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('image', imageUrl);
    });

    test('image field set to "/static/dog_default.png" by default if no value given', async () => {
        const defaultImageUrl = '/static/dog_default.png';

        const dogTest = {
            name: 'testdog',
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('image', defaultImageUrl);
    });

    test('name field set at the creation check', async () => {
        const dogTest = {
            name: 'testdog',
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('name', 'testdog');
    });

    test('name set to "nameless" by default if no value given', async () => {
        const dogTest = {
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('name', 'nameless');
    });

    test('status field set at the creation check', async () => {
        const dogTest = {
            name: 'testdog',
            gender: 'F',
            status: 1,
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('status', 1);
    });

    test('status field set to 0 by default if no value given', async () => {
        const dogTest = {
            name: 'testdog',
            gender: 'F',
        } as IDog;

        const res = (await createNewDog(dogTest)) as IDog;

        expect(res).toHaveProperty('status', 0);
    });
});
