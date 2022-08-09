const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

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
