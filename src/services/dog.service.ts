import { IDog, IDogQuery, IFilterResult } from '../interfaces/dog.interface';
import { DogModel } from '../models/dog.model';
import { filterDogsAggregation } from '../aggregations/dog.aggregations';

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
    const [result]: any = await filterDogsAggregation(query);
    const { pagination, data } = result;
    return { pagination: pagination[0], data };
}

export async function deleteDogById(dogId: string): Promise<boolean> {
    const { deletedCount }: any = await DogModel.deleteOne({
        _id: dogId,
    });

    return deletedCount === 1;
}
