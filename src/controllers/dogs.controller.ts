import { Request, Response, NextFunction } from 'express';
import { IDog, IDogQuery } from '../interfaces/dog.interface';
import {
    createNewDog,
    deleteDogById,
    filteredDogsFromQuery,
    getDogById,
    updateDog,
    getRacesList,
} from '../services/dog.service';
import logger from '../utils/logger';

export async function getDogByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const dog: IDog | undefined = await getDogById(req.params.dogId);

        res.json(dog);
    } catch (e) {
        next(e);
    }
}

export async function updateDogCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const dog: IDog = {
        // ...(coundition                =>    act                )
        ...(req.body.race !== undefined && { race: req.body.race }),
        ...(req.body.gender !== undefined && { gender: req.body.gender }),
        ...(req.body.age !== undefined && { age: req.body.age }),
        ...(req.body.vaccines !== undefined && { vaccines: req.body.vaccines }),
        ...(req.body.behave !== undefined && { behave: req.body.behave }),
        ...(req.body.image !== undefined && { image: req.body.image }),
        ...(req.body.name !== undefined && { name: req.body.name }),
        ...(req.body.status !== undefined && { status: req.body.status }),
    } as IDog;

    const result = await updateDog(req.params.dogId, dog);

    res.status(206).json(result);
}

export async function createNewDogCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const dog: IDog = {
        race: req.body.race,
        gender: req.body.gender,
        age: req.body.age,
        vaccines: req.body.vaccines,
        behave: req.body.behave,
        image: req.body.image,
        name: req.body.name,
        status: req.body.statues,
        owner: req.user?._id,
    } as IDog;

    const result = await createNewDog(dog);

    res.status(201).json(result);
}

export async function filterDogFromQueryCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const queryFilters: IDogQuery = req.queryFilters as IDogQuery;

    logger.info(req.id, 'Fetching dog list from aggregation query', {
        query: queryFilters,
    });
    const dogsResponse = await filteredDogsFromQuery(req.id, queryFilters);

    logger.info(req.id, 'response aggregation result', {
        pagination: dogsResponse.pagination,
        totalData: dogsResponse.data.length,
    });

    res.json(dogsResponse);
}

export async function deleteDogByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const isDeleted = await deleteDogById(req.params.dogId);

    res.sendStatus(isDeleted ? 200 : 500);
}

export async function getRacesListCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const list: string[] = await getRacesList();

    const status = list === undefined ? 500 : 200;

    res.status(status).json(list);
}
