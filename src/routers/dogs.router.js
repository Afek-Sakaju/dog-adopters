const express = require('express');
const {
    validateDogBody,
    requiredDogBodyField,
} = require('../middleware/validate-dog.middleware');
const {
    getDogByIdCtrl,
    filterDogFromQueryCtrl,
    getFilteredDogListCtrl,
    createNewDogCtrl,
    deleteDogByIdCtrl,
} = require('../controllers/dogs.controller');

const router = express.Router();

//localhost:3000/dogs/123
router.get('/:dogId', getDogByIdCtrl);

//localhost:3000/dogs?status=available&gender=M
//{status: 'available', gender: 'M'}
router.get('/', filterDogFromQueryCtrl);

router.post('/', validateDogBody, requiredDogBodyField, createNewDogCtrl);

router.put('/:dogId', validateDogBody, getFilteredDogListCtrl);

router.delete('/:dogId', deleteDogByIdCtrl);

module.exports = router;
