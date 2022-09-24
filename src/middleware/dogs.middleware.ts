import { Request, Response, NextFunction } from 'express';
import { validate as isValidUUID } from 'uuid';
import { IDog, IDogQuery } from '../interfaces/dog.interface';
import { validateOwner } from '../services/dog.service';

export async function validateOwnerMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const requestUserId = (<any>req.user)?._id;
    const requestUserAdmin = (<any>req.user)?.isAdmin;
    const isValidateOwner =
        requestUserAdmin ||
        (requestUserId &&
            (await validateOwner(requestUserId, req.params.dogId)));

    if (!isValidateOwner) {
        return next('not approved to perform this request');
    }

    return next();
}

export function validateAndConvertQuery(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const query: IDogQuery = {
        ...(req.query.status !== undefined && { status: +req.query.status }),
        ...(req.query.gender !== undefined && { gender: req.query.gender }),
        ...(req.query.race !== undefined && {
            race: (<any>req.query.race).split(','),
        }),
        ...(req.query.minAge !== undefined && { minAge: +req.query.minAge }),
        ...(req.query.maxAge !== undefined && { maxAge: +req.query.maxAge }),
        ...(req.query.name !== undefined && { name: `.*${req.query.name}.*` }),
        ...(req.query.sortByStatus !== undefined && {
            sortByStatus: +req.query.sortByStatus,
        }),
        ...(req.query.sortByGender !== undefined && {
            sortByGender: +req.query.sortByGender,
        }),
        ...(req.query.sortByRace !== undefined && {
            sortByRace: +req.query.sortByRace,
        }),
        ...(req.query.sortByAge !== undefined && {
            sortByAge: +req.query.sortByAge,
        }),
        ...(req.query.sortByName !== undefined && {
            sortByName: +req.query.sortByName,
        }),
        page: req.query.page === undefined ? 1 : +req.query.page,
        itemsPerPage:
            req.query.itemsPerPage === undefined ? 10 : +req.query.itemsPerPage,
    } as IDogQuery;

    if (Number.isNaN(query.page) || query.page <= 0) {
        next('page must be above 0');
    }
    if (
        Number.isNaN(query.itemsPerPage) ||
        query.itemsPerPage <= 0 ||
        query.itemsPerPage > 100
    ) {
        next('itemsPerPage must be less then 101');
    }
    if (Number.isNaN(query.status)) next('status must be a number');
    if (Number.isNaN(query.minAge)) next('minAge must be a number');
    if (Number.isNaN(query.maxAge)) next('maxAge must be a number');
    if (
        query.sortByStatus !== undefined &&
        (Number.isNaN(query.sortByStatus) ||
            [-1, 1].includes(query.sortByStatus))
    )
        next('sortByStatus must be a number [-1 or 1]');
    if (
        query.sortByGender !== undefined &&
        (Number.isNaN(query.sortByGender) ||
            [-1, 1].includes(query.sortByGender))
    )
        next('sortByGender must be a number [-1 or 1]');
    if (
        query.sortByRace !== undefined &&
        (Number.isNaN(query.sortByRace) || [-1, 1].includes(query.sortByRace))
    )
        next('sortByRace must be a number [-1 or 1]');
    if (
        query.sortByAge !== undefined &&
        (Number.isNaN(query.sortByAge) || [-1, 1].includes(query.sortByAge))
    )
        next('sortByAge must be a number [-1 or 1]');
    if (
        query.sortByName !== undefined &&
        (Number.isNaN(query.sortByName) || [-1, 1].includes(query.sortByName))
    )
        next('sortByName must be a number [-1 or 1]');

    req.queryFilters = query;
}

export function validateDogBodyMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const dogFromBody: IDog = req.body;
    const { _id, race, gender, age, vaccines, behave, image, name, status } =
        dogFromBody;

    if (_id !== undefined && !isValidUUID(_id)) {
        return next(Error('id is not valid uuid'));
    }

    if (race !== undefined && (!race.length || race.length > 20)) {
        return next(Error('race is not valid string'));
    }

    if (gender !== undefined) {
        if (!['M', 'F'].includes(gender.toUpperCase())) {
            return next(Error('gender is not valid string'));
        }
        req.body.gender = gender.toUpperCase();
    }

    if (age !== undefined) {
        if (Number.isNaN(age)) {
            return next(Error('age is not valid number'));
        }
        req.body.age = +age;
        if (!(0 <= age && age <= 20)) {
            return next(Error('age is out of range 0-20'));
        }
    }

    if (vaccines !== undefined) {
        if (Number.isNaN(vaccines)) {
            return next(Error('vaccines is not valid number'));
        }
        req.body.vaccines = +vaccines;
        if (!(0 <= vaccines && vaccines <= 10)) {
            return next(Error('vaccines count is out of range 0-10'));
        }
    }

    if (
        behave !== undefined &&
        (!Array.isArray(behave) || behave.some((b) => typeof b !== 'string'))
    ) {
        return next(Error('behave must be valid array of strings'));
    }

    if (image !== undefined && typeof image !== 'string') {
        return next(Error('image url be valid string'));
    }

    if (name !== undefined && (typeof name !== 'string' || name.length > 20)) {
        return next(
            Error('name url be valid string with maximum 20 characters')
        );
    }

    if (status !== undefined) {
        if (![0, 1].includes(status)) {
            return next(
                Error('status is not valid, enter only available(0)/adopted(1)')
            );
        }
        req.body.status = status;
    }

    next();
}

export function requiredDogBodyFieldMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const requireFieldMissing = ['gender', 'age'].filter(
        (key) => !req.body[key]
    );

    if (requireFieldMissing.length) {
        next(
            Error(
                `missing required fields: ${JSON.stringify(
                    requireFieldMissing
                )}`
            )
        );
    } else next();
}
