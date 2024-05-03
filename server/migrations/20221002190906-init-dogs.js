const ISODate = (date) => new Date(date);
const NumberInt = (num) => num;

// ! This data is used in the tests, so it should not be changed
module.exports = {
    async up(db, _client) {
        const adminUser = await db
            .collection('users')
            .findOne({ username: 'admin' });

        await db.collection('dogs').insertMany([
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'mixed',
                gender: 'M',
                age: NumberInt(9),
                isVaccinated: true,
                isDesexed: false,
                characteristics: ['agressive'],
                image: '/static/dog_default.png',
                name: 'avis',
                notes: 'The dog loves to be at home most of the time',
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
                isVaccinated: true,
                isDesexed: false,
                characteristics: ['agressive'],
                image: '/static/dog_default.png',
                name: 'rikko',
                notes: '',
                status: 0,
                createdAt: ISODate('2022-09-15T19:10:37.793+0000'),
                updatedAt: ISODate('2022-09-15T19:25:18.684+0000'),
                __v: NumberInt(0),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Alaskan Athabascan',
                gender: 'M',
                age: NumberInt(11),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Ive',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.099+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.099+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Asian Indian',
                gender: 'M',
                age: NumberInt(7),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Shermie',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Ute',
                gender: 'F',
                age: NumberInt(7),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Evelin',
                notes: 'Hates cats and other small animals',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Micronesian',
                gender: 'F',
                age: NumberInt(8),
                isVaccinated: true,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Rufe',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'South American',
                gender: 'F',
                age: NumberInt(5),
                isVaccinated: false,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Nev',
                notes: "Prefer to be with its owner most of the time, doesn't like the idea of being alone",
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Menominee',
                gender: 'F',
                age: NumberInt(12),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Newton',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Native Hawaiian',
                gender: 'F',
                age: NumberInt(3),
                isVaccinated: false,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Giacopo',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Yuman',
                gender: 'F',
                age: NumberInt(10),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Westbrooke',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Venezuelan',
                gender: 'M',
                age: NumberInt(3),
                isVaccinated: false,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Roderigo',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Menominee',
                gender: 'F',
                age: NumberInt(10),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Rip',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Black or African American',
                gender: 'M',
                age: NumberInt(15),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Trent',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.100+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.100+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Mexican',
                gender: 'F',
                age: NumberInt(19),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Cheston',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Japanese',
                gender: 'F',
                age: NumberInt(20),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Jared',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Costa Rican',
                gender: 'F',
                age: NumberInt(10),
                isVaccinated: true,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Perceval',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Laotian',
                gender: 'F',
                age: NumberInt(12),
                isVaccinated: true,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Brant',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Ottawa',
                gender: 'M',
                age: NumberInt(14),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Lou',
                notes: 'Allergic to nuts',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Micronesian',
                gender: 'M',
                age: NumberInt(4),
                isVaccinated: false,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Jessey',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Aleut',
                gender: 'M',
                age: NumberInt(10),
                isVaccinated: true,
                isDesexed: true,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Urbain',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Panamanian',
                gender: 'M',
                age: NumberInt(8),
                isVaccinated: false,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Solly',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Laotian',
                gender: 'M',
                age: NumberInt(13),
                isVaccinated: true,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Trevar',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Chilean',
                gender: 'M',
                age: NumberInt(6),
                isVaccinated: true,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Bryan',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'Laotian',
                gender: 'F',
                age: NumberInt(13),
                isVaccinated: true,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Carr',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
            {
                adopter: null,
                adoptionAt: ISODate('1970-01-01T00:00:00.000+0000'),
                race: 'American Indian and Alaska Native (AIAN)',
                gender: 'F',
                age: NumberInt(8),
                isVaccinated: true,
                isDesexed: false,
                characteristics: [],
                image: '/static/dog_default.png',
                name: 'Nickie',
                notes: '',
                status: 0,
                __v: NumberInt(0),
                createdAt: ISODate('2022-09-21T18:59:36.101+0000'),
                updatedAt: ISODate('2022-09-21T18:59:36.101+0000'),
                owner: adminUser._id,
            },
        ]);
    },

    async down(db, _client) {
        await db.collection('dogs').deleteMany({});
    },
};
