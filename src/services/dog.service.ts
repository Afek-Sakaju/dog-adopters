import { Idog, IdogQuery } from '../interfaces/dog.interface';

// function : Promise<...> ... = outPut type of function
export async function getDogById(dogId: string): Promise<Idog | undefined> {
    // todo: implement query

    return undefined;
}

export async function updateDog(
    dogId: string,
    dog: Idog
): Promise<Idog | undefined> {
    // todo: implement query

    return undefined;
}

export async function createNewDog(dog: Idog): Promise<Idog | undefined> {
    // todo: implement query

    return undefined;
}

export async function filterDogFromQuery(query: IdogQuery): Promise<Idog[]> {
    // todo: implement query

    return [];
}

export async function deleteDogById(dogId: string): Promise<boolean> {
    // todo: implement query

    return false;
}
