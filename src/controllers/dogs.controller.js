const dogsList = require('../mocks/MOCK_DOGS_DATA.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const mockPath = path.join(__dirname, '..', 'mocks', 'MOCK_DOGS_DATA.json');

module.exports.getDogByIdCtrl = function (req, res, next) {
    const dog = dogsList.find((dog) => dog.id === req.params.dogId);
    res.json(dog);
};

module.exports.getFilteredDogListCtrl = function (req, res, next) {
    const dog = dogsList.find((d) => d.id === req.params.dogId);
    // dog is defined by reference

    if (!dog) {
        res.sendStatus(204);
        return;
    }

    dog.race = req.body.race ?? dog.race;
    dog.gender = req.body.gender ?? dog.gender;
    dog.age = req.body.age ?? dog.age;
    dog.vaccines = req.body.vaccines ?? dog.vaccines;
    dog.behave = req.body.behave ?? dog.behave;
    dog.image = req.body.image ?? dog.image;
    dog.name = req.body.name ?? dog.name;
    dog.status = req.body.status ?? dog.status;

    fs.writeFileSync(mockPath, JSON.stringify(dogsList), { encoding: 'utf8' });

    res.sendStatus(206);
};

module.exports.createNewDogCtrl = function (req, res, next) {
    const dog = {
        id: uuidv4(),
        race: req.body.race ?? 'unknown',
        gender: req.body.gender,
        age: req.body.age,
        vaccines: req.body.vaccines ?? 0,
        behave: req.body.behave ?? [],
        image: req.body.image,
        name: req.body.name ?? '',
        status: 'available',
    };

    dogsList.push(dog);

    fs.writeFileSync(mockPath, JSON.stringify(dogsList), { encoding: 'utf8' });

    res.sendStatus(201);
};

module.exports.filterDogFromQueryCtrl = function (req, res, next) {
    const { status, gender, race, minAge, maxAge, name } = req.query;
    const dogs = dogsList.filter((dog) => {
        if (status !== undefined && dog.status !== status) return false;
        if (
            gender !== undefined &&
            dog.gender.toLowerCase() !== gender.toLowerCase()
        )
            return false;
        if (
            race !== undefined &&
            !race
                .split(',')
                .map((r) => r.trim().toLowerCase())
                .includes(dog.race.toLowerCase())
        )
            return false;
        if (minAge !== undefined && !(dog.age >= minAge)) return false;
        if (maxAge !== undefined && !(dog.age <= maxAge)) return false;
        if (
            name !== undefined &&
            !dog.name.toLowerCase().includes(name.toLowerCase())
        ) {
            return false;
        }
        return true;
    });
    res.json(dogs);
};

module.exports.deleteDogByIdCtrl = function (req, res, next) {
    const dogIndex = dogsList.findIndex((d) => d.id === req.params.dogId);

    if (dogIndex === -1) return res.sendStatus(204);

    dogsList.splice(dogIndex, 1);

    fs.writeFileSync(mockPath, JSON.stringify(dogsList), { encoding: 'utf8' });

    res.sendStatus(200);
};
