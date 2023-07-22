import axios from 'axios';

import { getUrlFromParams } from '@utils';

export default class BaseProxy {
    constructor(url) {
        this.url = url;
    }

    async getData(path = '') {
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
            const errorMessage = `error:${error},method:${method},status:${error.response.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async getDataById(id, path = '') {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, path, id });

        const method = 'GET';

        try {
            const response = await axios.get(requestUrl, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async post(data, path, id) {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, path, id });
        const method = 'POST';

        try {
            const response = await axios.post(requestUrl, data, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async put(data, id, path = '') {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, path, id });

        const method = 'PUT';

        try {
            const response = await axios.put(requestUrl, data, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }

    async delete(id, path = '') {
        const requestUrl = getUrlFromParams({ baseUrl: this.url, path, id });
        const method = 'DELETE';

        try {
            const response = await axios.delete(requestUrl, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage = `error:${error},method:${method},status:${error.response.status},url:${error.response.url}`;
            throw Error(errorMessage);
        }
    }
}
