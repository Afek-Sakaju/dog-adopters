const express = require('express');
const {
    validateDogBodyMW,
    requiredDogBodyFieldMW,
} = require('../middleware/dogs.middleware');
const {
    getDogByIdCtrl,
    filterDogFromQueryCtrl,
    getFilteredDogListCtrl,
    createNewDogCtrl,
    deleteDogByIdCtrl,
} = require('../controllers/dogs.controller');
const { isAuthenticatedMW } = require('../middleware/auth.middleware');

const router = express.Router();

//localhost:3000/dogs/123
router.get('/:dogId', getDogByIdCtrl);

//localhost:3000/dogs?status=available&gender=M
//{status: 'available', gender: 'M'}
router.get('/', filterDogFromQueryCtrl);

router.post(
    '/',
    isAuthenticatedMW,
    validateDogBodyMW,
    requiredDogBodyFieldMW,
    createNewDogCtrl
);

router.put(
    '/:dogId',
    isAuthenticatedMW,
    validateDogBodyMW,
    getFilteredDogListCtrl
);

router.delete('/:dogId', isAuthenticatedMW, deleteDogByIdCtrl);

module.exports = router;
