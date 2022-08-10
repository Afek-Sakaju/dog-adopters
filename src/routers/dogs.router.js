const express = require('express');
const { validateDogBody } = require('../middleware/validate-dog.middleware');
const {
    getDogById,
    getFilteredDogListCtrl,
    filterDogFromQuery,
    createNewDog,
    requiredDogBodyField,
    deleteDogById,
} = require('../controllers/dogs.controller');

const router = express.Router();

//localhost:3000/dogs/123
router.get('/:dogId', getDogById);

//localhost:3000/dogs?status=available&gender=M
//{status: 'available', gender: 'M'}
router.get('/', filterDogFromQuery);

router.post('/', validateDogBody, requiredDogBodyField, createNewDog);

router.put('/:dogId', validateDogBody, getFilteredDogListCtrl);

router.delete('/:dogId', deleteDogById);

module.exports = router;
