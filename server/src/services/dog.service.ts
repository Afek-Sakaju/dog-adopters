import {
    IDog,
    IDogDoc,
    IDogQuery,
    IFilterResult,
} from '../interfaces/dog.interface';
import { DogModel } from '../models/dog.model';
import { filterDogsAggregation } from '../aggregations/filterDogs.aggregations';
import logger from '../utils/logger';
import { TEST_REQ_ID } from '../test-utils/environment-variables';

export async function getDogById(
    dogId: string,
    requestId: string = TEST_REQ_ID
): Promise<IDogDoc> {
    logger.verbose(requestId, 'running get dog by id request to DB');

    const dogDoc: IDogDoc = await DogModel.findById(dogId);
    return dogDoc;
}

export async function updateDog(
    dogId: string,
    dog: IDog,
    requestId: string = TEST_REQ_ID
): Promise<IDogDoc> {
    logger.verbose(requestId, "running Update of dog's data request to DB");

    const dogDoc: IDogDoc = await DogModel.findOneAndUpdate(
        { _id: dogId },
        { $set: dog },
        { new: true }
    );
    return dogDoc;
}

export async function validateOwner(
    ownerId: string,
    dogId: string,
    requestId: string = TEST_REQ_ID
): Promise<boolean> {
    logger.verbose(
        requestId,
        "Validating user's ownership of the dog by request to DB"
    );

    const isDogOwnerExist = await DogModel.findOne({
        _id: dogId,
        owner: ownerId,
    }).select('_id owner');

    logger.info(requestId, 'Validation finished', {
        isOwner: !!isDogOwnerExist,
    });

    return !!isDogOwnerExist;
}

export async function createNewDog(
    dog: IDog,
    requestId: string = TEST_REQ_ID
): Promise<IDogDoc> {
    logger.verbose(requestId, 'Running dog creation request to DB');

    const dogDoc = new DogModel(dog);
    const res: IDogDoc = await dogDoc.save();
    return res;
}

export async function filteredDogsFromQuery(
    query: IDogQuery,
    requestId: string = TEST_REQ_ID
): Promise<IFilterResult> {
    const aggregation = filterDogsAggregation(query);

    logger.verbose(requestId, 'running aggregation', { aggregation });

    const [
        {
            pagination: [
                pagination = {
                    page: query.page,
                    itemsPerPage: query.itemsPerPage,
                    totalItems: 0,
                    totalPages: 0,
                },
            ],
            data,
        },
    ] = await DogModel.aggregate(aggregation);

    return { pagination, data } as IFilterResult;
}

export async function deleteDogById(
    dogId: string,
    requestId: string = TEST_REQ_ID
): Promise<boolean> {
    logger.verbose(requestId, 'running delete request to DB');

    const { deletedCount } = await DogModel.deleteOne({ _id: dogId });

    return deletedCount === 1;
}

export async function getRacesList(requestId: string = TEST_REQ_ID) {
    logger.verbose(requestId, 'Running get request for races list to DB');

    const list: string[] = await DogModel.distinct('race');

    return list;
}
