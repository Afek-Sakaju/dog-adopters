import express from 'express';

import {
    getDogByIdCtrl,
    filterDogFromQueryCtrl,
    updateDogCtrl,
    createNewDogCtrl,
    deleteDogByIdCtrl,
} from '../controllers/dogs.controller';

import { isAuthenticatedMW } from '../middleware/auth.middleware';

const router = express.Router();

//localhost:3000/dogs/123
router.get('/:dogId', getDogByIdCtrl);

//localhost:3000/dogs?status=available&gender=M
//{status: 'available', gender: 'M'}
router.get('/', filterDogFromQueryCtrl);

router.post('/', isAuthenticatedMW, createNewDogCtrl);

router.put('/:dogId', isAuthenticatedMW, updateDogCtrl);

router.delete('/:dogId', isAuthenticatedMW, deleteDogByIdCtrl);

export = router;
