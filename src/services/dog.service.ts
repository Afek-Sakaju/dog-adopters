import { IDog, IDogQuery, IFilterResult } from '../interfaces/dog.interface';
import { DogModel } from '../models/dog.model';
import { filterDogsAggregation } from '../aggregations/filterDogs.aggregations';
import logger from '../utils/logger';

// function : Promise<...> ... = outPut type of function
export async function getDogById(
    requestId: string,
    dogId: string
): Promise<IDog | undefined> {
    logger.verbose(requestId, 'running get dog by id request to DB');

    const dogDoc: any = await DogModel.findById(dogId);

    return dogDoc?.toJSON() as unknown as IDog | undefined;
}

export async function updateDog(
    requestId: string,
    dogId: string,
    dog: IDog
): Promise<IDog | undefined> {
    logger.verbose(requestId, "running Update of dog's data request to DB");

    const dogDoc: any = await DogModel.findOneAndUpdate(
        { _id: dogId },
        { $set: dog },
        { new: true }
    );

    return dogDoc?.toJSON();
}

export async function validateOwner(
    ownerId: string,
    dogId: string
): Promise<boolean> {
    const isDogOwnerExist = await DogModel.findOne({
        _id: dogId,
        owner: ownerId,
    }).select('_id owner');

    return !!isDogOwnerExist;
}

export async function createNewDog(
    requestId: string,
    dog: IDog
): Promise<IDog> {
    logger.verbose(requestId, 'Running dog creation request to DB');

    const dogDoc = new DogModel(dog);
    const res: any = await dogDoc.save();

    return res.toJSON();
}

export async function filteredDogsFromQuery(
    requestId: string,
    query: IDogQuery
): Promise<IFilterResult> {
    const aggregation = filterDogsAggregation(query);

    logger.verbose(requestId, 'running aggregation', { aggregation });

    const [result]: any = await DogModel.aggregate(aggregation);

    const {
        pagination: [
            pagination = {
                page: query.page,
                itemsPerPage: query.itemsPerPage,
                totalItems: 0,
                totalPages: 0,
            },
        ],
        data,
    } = result;

    return { pagination, data };
}

export async function deleteDogById(
    requestId: string,
    dogId: string
): Promise<boolean> {
    logger.verbose(requestId, 'running delete request to DB');

    const { deletedCount }: any = await DogModel.deleteOne({
        _id: dogId,
    });

    return deletedCount === 1;
}

export async function getRacesList(requestId: string) {
    logger.verbose(requestId, 'Running get request for races list to DB');

    const list: string[] = await DogModel.distinct('race');

    return list;
}
