import { Request, Response, NextFunction } from 'express';
import { IDog, IDogQuery } from '../interfaces/dog.interface';
import {
    createNewDog,
    deleteDogById,
    filteredDogsFromQuery,
    getDogById,
    updateDog,
} from '../services/dog.service';

export async function getDogByIdCtrl(
    req: Request,
    res: Response,
    _next: NextFunction // it says to TS that i dont must to use this variable
) {
    const dog: IDog | undefined = await getDogById(req.params.dogId);

    res.json(dog);
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
    } as IDog; // to ignore undefined params;
    //todo : conver param id to _id

    const result = await createNewDog(dog);

    res.status(201).json(result);
}

export async function filterDogFromQueryCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const queryFilters: IDogQuery = req.queryFilters as IDogQuery;

    const dogsList = await filteredDogsFromQuery(queryFilters);

    res.json(dogsList);
}

export async function deleteDogByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const isDeleted = await deleteDogById(req.params.dogId);

    res.sendStatus(isDeleted ? 200 : 204);
}
