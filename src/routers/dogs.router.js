const express = require('express');
const router = express.Router();

const dogsList = [];

//localhost:3000/dogs/123
router.get('/:dogId', (req, res, next) => {
    res.json({});
});

//localhost:3000/dogs?status=available&gender=M
router.get('/', (req, res, next) => {
    res.json(dogsList);
});

router.post('/', (req, res, next) => {
    res.sendStatus(201);
});

router.put('/:dogId', (req, res, next) => {
    res.sendStatus(203);
});

router.delete('/:dogId', (req, res, next) => {
    res.sendStatus(206);
});

module.exports = router;
