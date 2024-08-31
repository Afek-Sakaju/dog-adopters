import type { AxiosResponse } from 'axios';

import type { Dog } from '@/types';
import BaseProxy from './proxy';

export default class DogDataProxy extends BaseProxy {
    async getDogByID({ id }: { id?: string; path?: string }): Promise<Dog> {
        const dog: Dog = await super.getDataById({ id });
        return dog;
    }

    async isOwnerOfDog({ id }: { id: string }): Promise<boolean> {
        try {
            await super.getDataById({ id, path: 'isOwner' });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getFilteredDogsList({
        queryFilters,
    }: { queryFilters?: object }): Promise<unknown> {
        const validQueryFilters: Record<string, unknown> = {};

        Object.entries(queryFilters).forEach(([filter, value]) => {
            const isFilterValid: boolean = ![undefined, null, ''].includes(
                value
            );
            if (isFilterValid) validQueryFilters[filter] = value;
        });

        const filteredDogsList: Dog[] = (await super.getData({
            params: validQueryFilters,
        })) as Dog[];
        return filteredDogsList;
    }

    async getRacesList(): Promise<string[]> {
        const path: string = 'breeds';
        const racesList: string[] = (await super.getData({ path })) as string[];
        return racesList;
    }

    async getDogIdsByOwnerId({
        userId,
    }: { userId: string }): Promise<string[]> {
        const path = `user/${userId}/dogs/ids`;
        const dogIds: string[] = (await super.getData({ path })) as string[];
        return dogIds;
    }

    
    async createDog({ dogData }: { dogData: Dog }): Promise<Dog> {
        const dog: Dog = await super.post({ data: dogData });
        return dog;
    }
    
    async uploadDogImage({
        image,
        id,
    }: { image: string; id: string }): Promise<AxiosResponse> {
        const path: string = 'profile';
        const response: AxiosResponse = (await super.postImageFile({
            data: image,
            id,
            path,
        })) as AxiosResponse;
        return response;
    }
    
    async updateDog({ dogData, id }: { dogData: Dog; id: string }): Promise<Dog> {
        const dog: Dog = await super.put({ data: dogData, id });
        return dog;
    }
    
    async deleteDog({ id }: { id?: string; path?: string }): Promise<Dog> {
        const dog: Dog = await super.delete({ id });
        return dog;
    }
}
