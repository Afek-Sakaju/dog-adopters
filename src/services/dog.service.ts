import { Idog, IdogQuery } from '../interfaces/dog.interface';
import { DogModel } from '../models/dog.model';

// function : Promise<...> ... = outPut type of function
export async function getDogById(dogId: string): Promise<Idog | undefined> {
    const dogDoc: any = await DogModel.findById(dogId);

    return dogDoc?.toJSON() as unknown as Idog | undefined;
}

export async function updateDog(
    dogId: string,
    dog: Idog
): Promise<Idog | undefined> {
    const dogDoc: any = await DogModel.findOneAndUpdate(
        { _id: dogId },
        { $set: dog },
        { new: true }
    );

    return dogDoc?.toJSON();
}

export async function createNewDog(dog: Idog): Promise<Idog | undefined> {
    const dogDoc = new DogModel(dog);
    const res: any = await dogDoc.save();

    return res.toJSON();
}

export async function filteredDogsFromQuery(query: IdogQuery): Promise<Idog[]> {
    // todo: implement query with agregation

    return [];
}

export async function deleteDogById(dogId: string): Promise<boolean> {
    const { deletedCount }: any = await DogModel.deleteOne({
        _id: dogId,
    });

    return deletedCount === 1;
}
