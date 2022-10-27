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
        ...(req.query.sortByLastUpdated !== undefined && {
            sortByLastUpdated: +req.query.sortByLastUpdated,
        }),
        page: req.query.page === undefined ? 1 : +req.query.page,
        itemsPerPage:
            req.query.itemsPerPage === undefined ? 10 : +req.query.itemsPerPage,
    } as IDogQuery;

    if (Number.isNaN(query.page) || query.page <= 0) {
        return next('page must be above 0');
    }
    if (
        Number.isNaN(query.itemsPerPage) ||
        query.itemsPerPage <= 0 ||
        query.itemsPerPage > 100
    ) {
        return next('itemsPerPage must be less then 101');
    }
    if (query.status !== undefined && Number.isNaN(query.status)) {
        return next('status must be a number');
    }
    if (query.minAge !== undefined && Number.isNaN(query.minAge)) {
        return next('minAge must be a number');
    }
    if (query.maxAge !== undefined && Number.isNaN(query.maxAge)) {
        return next('maxAge must be a number');
    }
    if (
        query.sortByStatus !== undefined &&
        (Number.isNaN(query.sortByStatus) ||
            ![-1, 1].includes(query.sortByStatus))
    )
        return next('sortByStatus must be a number [-1 or 1]');
    if (
        query.sortByGender !== undefined &&
        (Number.isNaN(query.sortByGender) ||
            ![-1, 1].includes(query.sortByGender))
    )
        return next('sortByGender must be a number [-1 or 1]');
    if (
        query.sortByRace !== undefined &&
        (Number.isNaN(query.sortByRace) || ![-1, 1].includes(query.sortByRace))
    )
        return next('sortByRace must be a number [-1 or 1]');
    if (
        query.sortByAge !== undefined &&
        (Number.isNaN(query.sortByAge) || ![-1, 1].includes(query.sortByAge))
    )
        return next('sortByAge must be a number [-1 or 1]');
    if (
        query.sortByName !== undefined &&
        (Number.isNaN(query.sortByName) || ![-1, 1].includes(query.sortByName))
    )
        return next('sortByName must be a number [-1 or 1]');
    if (
        query.sortByLastUpdated !== undefined &&
        (Number.isNaN(query.sortByLastUpdated) ||
            ![-1, 1].includes(query.sortByLastUpdated))
    )
        return next('sortByLastUpdated must be a number [-1 or 1]');

    req.queryFilters = query;

    next();
}
