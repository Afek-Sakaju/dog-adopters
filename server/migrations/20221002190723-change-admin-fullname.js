module.exports = {
    async up(db, client) {
        await db
            .collection('users')
            .updateOne({ username: 'admin' }, { $set: { fullName: 'akef' } });
    },

    async down(db, client) {
        await db
            .collection('users')
            .updateOne({ username: 'admin' }, { $set: { fullName: 'admin' } });
    },
};
