import axios from 'axios';

import { getUrlFromParams } from '@utils';

export default class BaseProxy {
    constructor({ url }) {
        this.url = url;
    }

    async getData({ path } = {}) {
        const requestUrl = getUrlFromParams({
            baseUrl: this.url,
            path,
        });
        const method = 'GET';

        try {
            const response = await axios.get(requestUrl, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response?.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async getDataById({ id, path } = {}) {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, id, path });

        const method = 'GET';

        try {
            const response = await axios.get(requestUrl, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response?.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async post({ data, id, path } = {}) {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, id, path });
        const method = 'POST';

        try {
            const response = await axios.post(requestUrl, data, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error?.response?.status},url:${error?.response?.url}`;
            throw Error(errorMessage);
        }
    }

    async postImageFile({ data, id, path }) {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, id, path });
        const method = 'POST';

        try {
            const formData = new FormData();
            formData.append('profile', data); // Assuming data is a Blob or File object

            const response = await axios.post(requestUrl, formData, {
                withCredentials: true,
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response?.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async put({ data, id, path } = {}) {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, id, path });

        const method = 'PUT';

        try {
            const response = await axios.put(requestUrl, data, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response?.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async delete({ id, path } = {}) {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, id, path });
        const method = 'DELETE';

        try {
            const response = await axios.delete(requestUrl, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response?.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }
}
