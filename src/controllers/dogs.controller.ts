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
        status: 0,
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
    const queryParams: IDogQuery = req.query;

    const dogsList = await filteredDogsFromQuery(queryParams);

    // to do afek: add statues to agr..

    res.json(dogsList);

    /* const { status, gender, race, minAge, maxAge, name } = queryParams;

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
                .includes(dog.race.toLowerCase())
        )
            return false;
        if (minAge !== undefined && !(dog.age >= minAge)) return false;
        if (maxAge !== undefined && !(dog.age <= maxAge)) return false;
        if (
            name !== undefined &&
            !dog.name.toLowerCase().includes(name.toLowerCase())
        ) {
            return false;
        }
        return true;
    });
    res.json(dogs);
    */
}

export async function deleteDogByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const isDeleted = await deleteDogById(req.params.dogId);

    res.sendStatus(isDeleted ? 200 : 204);
}
