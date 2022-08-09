const { v4: uuidv4, validate: uuidValidate } = require('uuid');

module.exports.validateDogBody = function (req, res, next) {
    const { id, race, gender, age, vaccines, behave, image, name, status } =
        req.body;

    if (id !== undefined && !uuidValidate(id)) {
        return next(Error('id is not valid uuid'));
    }

    if (race !== undefined && (!race.length || race.length > 20)) {
        return next(Error('race is not valid string'));
    }

    if (gender !== undefined) {
        if (!['M', 'F'].includes(gender.toUpperCase())) {
            return next(Error('gender is not valid string'));
        }
        req.body.gender = gender.toUpperCase();
    }

    if (age !== undefined) {
        if (Number.isNaN(age)) {
            return next(Error('age is not valid number'));
        }
        req.body.age = +age;
        if (!(0 <= age && age <= 20)) {
            return next(Error('age is out of range 0-20'));
        }
    }

    if (vaccines !== undefined) {
        if (Number.isNaN(vaccines)) {
            return next(Error('vaccines is not valid number'));
        }
        req.body.vaccines = +vaccines;
        if (!(0 <= vaccines && vaccines <= 10)) {
            return next(Error('vaccines count is out of range 0-10'));
        }
    }

    if (
        behave !== undefined &&
        (!Array.isArray(behave) || behave.some((b) => typeof b !== 'string'))
    ) {
        return next(Error('behave must be valid array of strings'));
    }

    if (image !== undefined && typeof image !== 'string') {
        return next(Error('image url be valid string'));
    }

    if (name !== undefined && (typeof name !== 'string' || name.length > 20)) {
        return next(
            Error('name url be valid string with maximum 20 characters')
        );
    }

    if (status !== undefined) {
        if (!['available', 'adopted'].includes(status.toLowerCase())) {
            return next(
                Error('status is not valid, enter only available/adopted')
            );
        }
        req.body.status = status.toLowerCase();
    }

    next();
};

module.exports.requiredDogBodyField = function (req, res, next) {
    const requireFieldMissing = ['gender', 'age'].filter(
        (key) => !req.body[key]
    );

    if (requireFieldMissing.length) {
        next(
            Error(
                `missing required fields: ${JSON.stringify(
                    requireFieldMissing
                )}`
            )
        );
    } else next();
};
