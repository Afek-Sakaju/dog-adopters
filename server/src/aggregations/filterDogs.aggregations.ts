import { IDogQuery } from '../interfaces/dog.interface';

export function filterDogsAggregation(query: IDogQuery) {
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

    return [
        {
            $match: {
                ...((maxAge !== undefined || minAge !== undefined) && {
                    age: {
                        ...(minAge !== undefined && { $gte: minAge }),
                        ...(maxAge !== undefined && { $lte: maxAge }),
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
                dogName: '$name',
                race: 1,
                gender: 1,
                owner: '$owner.username',
                image: 1,
                isDesexed: 1,
                isVaccinated: 1,
                status: 1,
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
                            page,
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
                    ...((someSortExists
                        ? [
                              {
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
                              },
                          ]
                        : []) as any),
                    {
                        $skip: (page - 1) * itemsPerPage,
                    },
                    {
                        $limit: itemsPerPage,
                    },
                ],
            },
        },
    ];
}
