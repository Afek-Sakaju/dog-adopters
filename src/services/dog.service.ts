import { IDog, IDogQuery } from '../interfaces/dog.interface';
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

export async function createNewDog(dog: IDog): Promise<IDog | undefined> {
    const dogDoc = new DogModel(dog);
    const res: any = await dogDoc.save();

    return res.toJSON();
}

export async function filteredDogsFromQuery(query: IDogQuery): Promise<IDog[]> {
    // todo: implement query with agregation

    return [];
}

export async function deleteDogById(dogId: string): Promise<boolean> {
    const { deletedCount }: any = await DogModel.deleteOne({
        _id: dogId,
    });

    return deletedCount === 1;
}
