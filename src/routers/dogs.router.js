const dogsList = require('../mocks/MOCK_DOGS_DATA.json');
const express = require('express');

const router = express.Router();

//localhost:3000/dogs/123
router.get('/:dogId', (req, res, next) => {
    const dog = dogsList.find((dog) => dog.id === req.params.dogId);
    res.json(dog);
});

//localhost:3000/dogs?status=available&gender=M
//{status: 'available', gender: 'M'}
router.get('/', (req, res, next) => {
    const { status, gender, race, minAge, maxAge, name } = req.query;
    console.log(req.query);
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
                .includes(dog.race)
        )
            return false;
        if (minAge !== undefined && !(dog.age >= minAge)) return false;
        if (maxAge !== undefined && !(dog.age <= maxAge)) return false;
        if (
            name !== undefined &&
            !dog.name.toLowerCase().includes(name.toLowerCase())
        )
            return false;
    });
    res.json(dogs);
});

router.post('/', (req, res, next) => {
    /* todo : read all dogList, than push new dog to him from req.body
    if not mention some areas, put default values (vaccince, ect..)
    not default name and gender, id generate gui id
    (npm package to generate gui id) */
    res.sendStatus(201);
});

router.put('/:dogId', (req, res, next) => {
    res.sendStatus(203);
    /* todo : read all dogList, than push new data dog to him from req.body */
});

router.delete('/:dogId', (req, res, next) => {
    res.sendStatus(206);
    /* todo : read all dogList, than find correct dog, delete with splice
    (override file) */
});

module.exports = router;
