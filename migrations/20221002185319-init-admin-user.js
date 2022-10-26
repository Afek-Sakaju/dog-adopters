const bcrypt = require('bcrypt');

/* Dont change the user data! , the tests are 
adapted to being used with this speciefic data */
module.exports = {
    async up(db, client) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync('admin', salt);

        await db.collection('users').insertOne({
            username: 'admin',
            password: hash,
            phoneNumber: undefined,
            fullName: 'admin',
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: null,
        });
    },

    async down(db, client) {
        await db.collection('users').deleteOne({ username: 'admin' });
    },
};
