const bcrypt = require('bcrypt');

/* Dont change the user data! , the tests are 
adapted to being used with this specific data */
module.exports = {
    async up(db, client) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync('admin', salt);

        await db.collection('users').insertOne({
            username: 'admin',
            password: hash,
            phoneNumber: undefined,
            fullName: 'admin',
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: null,
        });

        salt = bcrypt.genSaltSync(10);
        hash = bcrypt.hashSync('user111', salt);

        await db.collection('users').insertOne({
            username: 'user111',
            password: hash,
            phoneNumber: undefined,
            fullName: 'user111',
            isAdmin: false,
            createdAt: new Date(),
            updatedAt: null,
        });
    },

    async down(db, client) {
        await db.collection('users').deleteOne({ username: 'admin' });
    },
};
