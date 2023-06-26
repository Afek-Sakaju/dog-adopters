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
    logger.info(req.id, "Request to get dog's data by id", {
        dogId: req.params.dogId,
    });

    try {
        const dog: IDog | undefined = await getDogById(
            req.params.dogId,
            req.id
        );

        logger.info(req.id, 'Result from getting dog by id', {
            data: dog,
        });

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

    logger.info(req.id, "Updating dog's data with new data", {
        data: dog,
    });

    const result = await updateDog(req.params.dogId, dog, req.id);

    logger.info(req.id, "Updating dog's data response result", {
        data: result,
    });

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

    logger.info(req.id, 'Creating dog with the data provided', {
        data: dog,
    });

    const result = await createNewDog(dog, req.id);

    logger.info(req.id, 'Response dog creation result', {
        response: result,
    });

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

    const dogsResponse = await filteredDogsFromQuery(queryFilters, req.id);

    logger.info(req.id, 'Response aggregation result', {
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
    logger.info(req.id, 'Deleting dog by his id', {
        dogId: req.params.dogId,
    });

    const isDeleted = await deleteDogById(req.params.dogId, req.id);

    logger.info(req.id, 'Delete dog by id result', {
        isDeleted: isDeleted,
    });

    res.sendStatus(isDeleted ? 200 : 500);
}

export async function getRacesListCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.info(req.id, 'Get request to races list');

    const list: string[] = await getRacesList(req.id);

    const status = list === undefined ? 500 : 200;

    logger.info(req.id, 'Get races list result', {
        totalData: list.length,
    });

    res.status(status).json(list);
}

export async function uploadDogPictureCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.info(req.id, "Uploaded dog's profile image", { image: req.file });

    const status = req.file === undefined ? 500 : 200;

    res.status(status).send(req.file);
}
