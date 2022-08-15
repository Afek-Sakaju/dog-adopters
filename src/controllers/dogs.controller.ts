import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import dogsList from '../mocks/DOGS.mock.json';
import fs from 'fs';
import path from 'path';
import Idog from '../insterfaces/dog.interface';

const mockPath: string = path.join(__dirname, '..', 'mocks', 'DOGS.mock.json');

export function getDogByIdCtrl(
    req: Request,
    res: Response,
    _next: NextFunction // it says to TS that im not must to use this variable
) {
    const dog: Idog | undefined = dogsList.find(
        (d) => d.id === req.params.dogId
    );
    res.json(dog);
}

export function getFilteredDogListCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const dog: Idog | undefined = dogsList.find(
        (d) => d.id === req.params.dogId
    );
    // dog is defined by reference

    if (!dog) {
        res.sendStatus(204);
        return;
    }

    dog.race = req.body.race ?? dog.race;
    dog.gender = req.body.gender ?? dog.gender;
    dog.age = req.body.age ?? dog.age;
    dog.vaccines = req.body.vaccines ?? dog.vaccines;
    dog.behave = req.body.behave ?? dog.behave;
    dog.image = req.body.image ?? dog.image;
    dog.name = req.body.name ?? dog.name;
    dog.status = req.body.status ?? dog.status;

    fs.writeFileSync(mockPath, JSON.stringify(dogsList), { encoding: 'utf8' });

    res.sendStatus(206);
}

export function createNewDogCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const dog: Idog = {
        id: uuidv4(),
        race: req.body.race ?? 'unknown',
        gender: req.body.gender,
        age: req.body.age,
        vaccines: req.body.vaccines ?? 0,
        behave: req.body.behave ?? [],
        image: req.body.image,
        name: req.body.name ?? '',
        status: 'available',
    };

    dogsList.push(dog);

    fs.writeFileSync(mockPath, JSON.stringify(dogsList), { encoding: 'utf8' });

    res.sendStatus(201);
}

export function filterDogFromQueryCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    interface Iquery {
        status?: string;
        gender?: string;
        race?: string;
        minAge?: number;
        maxAge?: number;
        name?: string;
    }

    const queryParams: Iquery = req.query;

    const { status, gender, race, minAge, maxAge, name } = queryParams;

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
}

export function deleteDogByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const dogIndex = dogsList.findIndex((d) => d.id === req.params.dogId);

    if (dogIndex === -1) return res.sendStatus(204);

    dogsList.splice(dogIndex, 1);

    fs.writeFileSync(mockPath, JSON.stringify(dogsList), { encoding: 'utf8' });

    res.sendStatus(200);
}
