import { Dog } from '@/utils/types';
import BaseProxy from './proxy';

type GetDogByIdProps = { id: string };
type CreateDogProps = { dogData: Dog };
type UploadDogImageProps = { image: string; id: string };
type UpdateDogProps = { dogData: Dog; id: string };
type DeleteDogProps = { id: string };

export default class DogDataProxy extends BaseProxy {
    async getDogByID({ id }: GetDogByIdProps): Dog {
        const dog: Dog = await super.getDataById({ id });
        return dog;
    }

    // Todo: add here proper types usage
    async getFilteredDogsList({ queryFilters }) {
        const validQueryFilters = {};

        Object.entries(queryFilters).forEach(([filter, value]) => {
            const isFilterValid = ![undefined, null, ''].includes(value);
            if (isFilterValid) validQueryFilters[filter] = value;
        });

        const filteredDogsList = await super.getData({
            params: validQueryFilters,
        });
        return filteredDogsList;
    }

    async getRacesList(): Promise<string[]> {
        const path: string = 'races';
        const racesList: string[] = await super.getData({ path });
        return racesList;
    }

    async createDog({ dogData }: CreateDogProps): Dog {
        const dog: Dog = await super.post({ data: dogData });
        return dog;
    }

    async uploadDogImage({ image, id }: UploadDogImageProps) {
        const path: string = 'profile';
        const response = await super.postImageFile({ data: image, id, path });
        return response;
    }

    async updateDog({ dogData, id }: UpdateDogProps): Dog {
        const dog: Dog = await super.put({ data: dogData, id });
        return dog;
    }

    async deleteDog({ id }: DeleteDogProps): Dog {
        const dog: Dog = await super.delete({ id });
        return dog;
    }
}
