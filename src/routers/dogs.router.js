const dogsList = require('../mocks/MOCK_DOGS_DATA.json');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const {
    getDogById,
    validateDogBody,
    createNewDog,
    requiredDogBodyField,
    deleteDogById,
} = require('../middleware/validate-dog.middleware');
const mockPath = path.join(__dirname, '..', 'mocks', 'MOCK_DOGS_DATA.json');
const {
    getFilteredDogListCtrl,
    filterDogFromQuery,
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
