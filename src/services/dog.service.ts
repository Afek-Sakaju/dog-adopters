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
    const isDogOwnerExist = await DogModel.findOne({
        _id: dogId,
        owner: ownerId,
    }).select('_id owner');

    return !!isDogOwnerExist;
}

export async function createNewDog(dog: IDog): Promise<IDog | undefined> {
    const dogDoc = new DogModel(dog);
    const res: any = await dogDoc.save();

    return res.toJSON();
}

export async function filteredDogsFromQuery(
    query: IDogQuery
): Promise<IFilterResult> {
    const {
        status,
        gender,
        race,
        minAge,
        maxAge,
        name,
        page,
        itemsPerPage,
        sortByStatus,
        sortByGender,
        sortByRace,
        sortByAge,
        sortByName,
        sortByLastUpdated,
    } = query;

    const someSortExists = [
        sortByStatus,
        sortByGender,
        sortByRace,
        sortByAge,
        sortByName,
        sortByLastUpdated,
    ].some((sortBy) => sortBy !== undefined);

    const [result]: any = await DogModel.aggregate([
        {
            $match: {
                ...((maxAge !== undefined || minAge !== undefined) && {
                    age: {
                        ...(minAge && { $gte: minAge }),
                        ...(maxAge && { $lte: maxAge }),
                    },
                }),
                ...(name !== undefined && {
                    name: {
                        $regex: name,
                        $options: 'i',
                    },
                }),
                ...(race !== undefined && {
                    race: { $in: race },
                }),
                ...(status !== undefined && {
                    status: status,
                }),
                ...(gender !== undefined && {
                    gender: gender,
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
                            page, // same as page:page
                            itemsPerPage,
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
                        ...((someSortExists && {
                            $sort: {
                                ...(sortByAge !== undefined && {
                                    age: sortByAge,
                                }),
                                ...(sortByGender !== undefined && {
                                    gender: sortByGender,
                                }),
                                ...(sortByName !== undefined && {
                                    name: sortByName,
                                }),
                                ...(sortByRace !== undefined && {
                                    race: sortByRace,
                                }),
                                ...(sortByStatus !== undefined && {
                                    status: sortByStatus,
                                }),
                                ...(sortByLastUpdated !== undefined && {
                                    updatedAt: sortByLastUpdated,
                                }),
                            },
                        }) as any),
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
