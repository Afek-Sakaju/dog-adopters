import BaseProxy from './proxy';

export default class DogDataProxy extends BaseProxy {
    async getDogByID({ id }) {
        const dog = await super.getDataById({ id });
        return dog;
    }

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

    async getRacesList() {
        const path = 'races';
        const racesList = await super.getData({ path });
        return racesList;
    }

    async createDog({ dogData }) {
        const dog = await super.post({ data: dogData });
        return dog;
    }

    async uploadDogImage({ image, id }) {
        const path = 'profile';
        const response = await super.postImageFile({ data: image, id, path });
        return response;
    }

    async updateDog({ dogData, id }) {
        const dog = await super.put({ data: dogData, id });
        return dog;
    }

    async deleteDog({ id }) {
        const dog = await super.delete({ id });
        return dog;
    }
}
