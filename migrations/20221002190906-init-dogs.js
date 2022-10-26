const ISODate = (date) => new Date(date);
const NumberInt = (num) => num;

/* Dont change\add dogs data! , the tests are 
adapted to being used with this speciefic data */
module.exports = {
    async up(db, client) {
        const adminUser = await db
            .collection('users')
            .findOne({ username: 'admin' });

        const ObjectId = (id) => adminUser._id;

        await db.collection('dogs').insertMany([
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'mixed',
                gender: 'M',
                age: NumberInt(9),
                vaccines: NumberInt(4),
                behave: ['agressive'],
                image: '/static/dog_default.png',
                name: 'avis',
                status: 0,
                createdAt: ISODate('2022-09-15T19:07:49.774+0000'),
                updatedAt: ISODate('2022-09-15T19:07:49.774+0000'),
                __v: NumberInt(0),
                owner: null,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'mixed',
                gender: 'M',
                age: NumberInt(9),
                vaccines: NumberInt(4),
                behave: ['agressive'],
                image: '/static/dog_default.png',
                name: 'rikko',
                status: 0,
                createdAt: ISODate('2022-09-15T19:10:37.793+0000'),
                updatedAt: ISODate('2022-09-15T19:25:18.684+0000'),
                __v: NumberInt(0),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Alaskan Athabascan',
                gender: 'M',
                age: NumberInt(11),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Ive',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.099+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.099+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Asian Indian',
                gender: 'M',
                age: NumberInt(7),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Shermie',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Ute',
                gender: 'F',
                age: NumberInt(7),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Evelin',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Micronesian',
                gender: 'F',
                age: NumberInt(8),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Rufe',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'South American',
                gender: 'F',
                age: NumberInt(5),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Nev',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Menominee',
                gender: 'F',
                age: NumberInt(12),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Newton',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Native Hawaiian',
                gender: 'F',
                age: NumberInt(3),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Giacopo',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Yuman',
                gender: 'F',
                age: NumberInt(10),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Westbrooke',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Venezuelan',
                gender: 'M',
                age: NumberInt(3),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Roderigo',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Menominee',
                gender: 'F',
                age: NumberInt(10),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Rip',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Black or African American',
                gender: 'M',
                age: NumberInt(15),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Trent',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Mexican',
                gender: 'F',
                age: NumberInt(19),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Cheston',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Japanese',
                gender: 'F',
                age: NumberInt(20),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Jared',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Costa Rican',
                gender: 'F',
                age: NumberInt(10),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Perceval',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Laotian',
                gender: 'F',
                age: NumberInt(12),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Brant',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Ottawa',
                gender: 'M',
                age: NumberInt(14),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Lou',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Micronesian',
                gender: 'M',
                age: NumberInt(4),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Jessey',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Aleut',
                gender: 'M',
                age: NumberInt(10),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Urbain',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Panamanian',
                gender: 'M',
                age: NumberInt(8),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Solly',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Laotian',
                gender: 'M',
                age: NumberInt(13),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Trevar',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Chilean',
                gender: 'M',
                age: NumberInt(6),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Bryan',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a158925b01190903ca81c'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Laotian',
                gender: 'F',
                age: NumberInt(13),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Carr',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'American Indian and Alaska Native (AIAN)',
                gender: 'F',
                age: NumberInt(8),
                vaccines: NumberInt(0),
                behave: [],
                image: '/static/dog_default.png',
                name: 'Nickie',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: ObjectId('632a1720445b9c30fc10776a'),
            },
        ]);
    },

    async down(db, client) {
        await db.collection('dogs').deleteMany({});
    },
};