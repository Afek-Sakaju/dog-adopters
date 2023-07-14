module.exports = {
    async up(db, _client) {
        await db
            .collection('users')
            .updateOne({ username: 'admin' }, { $set: { fullName: 'akef' } });
    },

    async down(db, _client) {
        await db
            .collection('users')
            .updateOne({ username: 'admin' }, { $set: { fullName: 'admin' } });
    },
};
