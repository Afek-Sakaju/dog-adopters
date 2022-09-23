import { IDog, IDogQuery, IFilterResult } from '../interfaces/dog.interface';
import { DogModel } from '../models/dog.model';

// function : Promise<...> ... = outPut type of function
export async function getDogById(dogId: string): Promise<IDog | undefined> {
    const dogDoc: any = await DogModel.findById(dogId);

    return dogDoc?.toJSON() as unknown as IDog | undefined;
}

export async function updateDog(
    dogId: string,
    dog: IDog
): Promise<IDog | undefined> {
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
    const dogFromDB = await DogModel.findById(dogId);

    if (ownerId === dogFromDB?.owner) return true;

    return false;
}

export async function createNewDog(dog: IDog): Promise<IDog | undefined> {
    const dogDoc = new DogModel(dog);
    const res: any = await dogDoc.save();

    return res.toJSON();
}

export async function filteredDogsFromQuery(
    query: IDogQuery
): Promise<IFilterResult> {
    const itemsPerPage = +(query.itemsPerPage ?? 10);
    const page = +(query.page ?? 1);

    //todo afek: if there is a queri to sort add to agregation
    const [result]: any = await DogModel.aggregate([
        {
            $match: {
                ...((query.maxAge !== undefined ||
                    query.minAge !== undefined) && {
                    age: {
                        ...(query.minAge && { $gte: +query.minAge }),
                        ...(query.maxAge && { $lte: +query.maxAge }),
                    },
                }),
                ...(query.name !== undefined && {
                    name: {
                        $regex: `.*${query.name}.*`,
                        $options: 'i',
                    },
                }),
                ...(query.race !== undefined && {
                    race: {
                        $in: query.race.split(','),
                    },
                }),
                ...(query.status !== undefined && {
                    status: query.status,
                }),
                ...(query.gender !== undefined && {
                    gender: query.gender,
                }),
            },
        },
        {
            $lookup: {
                let: { ownerId: '$owner' },
                from: 'users',
                as: 'owner',
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ['$_id', '$$ownerId'],
                            },
                        },
                    },
                    {
                        $project: { username: 1, _id: 0 },
                    },
                ],
            },
        },
        { $unwind: '$owner' },
        {
            $project: {
                age: 1,
                dogName: '$name', // destruction
                race: 1,
                gender: 1,
                owner: '$owner.username',
                image: 1,
            },
        },
        {
            $facet: {
                pagination: [
                    {
                        $group: {
                            _id: null,
                            totalItems: { $sum: 1 },
                        },
                    },
                    {
                        $addFields: {
                            page: page,
                            itemsPerPage: itemsPerPage,
                            totalPages: {
                                $divide: ['$totalItems', itemsPerPage],
                            },
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            page: 1,
                            totalItems: 1,
                            itemsPerPage: 1,
                            totalPages: { $ceil: '$totalPages' },
                        },
                    },
                ],
                data: [
                    {
                        $sort: {
                            updatedAt: -1,
                        },
                    },
                    {
                        $skip: (page - 1) * itemsPerPage,
                    },
                    {
                        $limit: itemsPerPage,
                    },
                ],
            },
        },
    ]);
    const { pagination, data } = result;
    return { pagination: pagination[0], data };
}

export async function deleteDogById(dogId: string): Promise<boolean> {
    const { deletedCount }: any = await DogModel.deleteOne({
        _id: dogId,
    });

    return deletedCount === 1;
}
