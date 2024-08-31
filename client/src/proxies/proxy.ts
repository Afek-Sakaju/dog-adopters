import axios, { AxiosResponse } from 'axios';

import { getUrlFromParams } from '@/utils';


export default class BaseProxy {
    url: string;

    constructor({ url }: { url: string }) {
        this.url = url;
    }

    async getData({ path, params }: { path?: string; params?: object }): Promise<unknown> {
        const requestUrl: string = getUrlFromParams({
            baseUrl: this.url,
            path,
        });
        const method: string = 'GET';

        try {
            const response: AxiosResponse = await axios.get(requestUrl, {
                withCredentials: true,
                ...(params && { params }),
            });
            return response?.data;
        } catch (error) {
            const errorMessage: string = `error:${error},method:${method},status:${error.response?.status},url:${error.response?.url}`;
            throw Error(errorMessage);
        }
    }

    async getDataById({ id, path }: { id?: string; path?: string }): Promise<unknown> {
        const requestUrl: string = getUrlFromParams({
            baseUrl: this.url,
            id,
            path,
        });
        const method: string = 'GET';

        try {
            const response: AxiosResponse = await axios.get(requestUrl, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage: string = `error:${error},method:${method},status:${error.response?.status},url:${error.response?.url}`;
            throw Error(errorMessage);
        }
    }

    async post({ data, id, path }: { data?: unknown; path?: string; id?: string }): Promise<unknown> {
        const requestUrl: string = getUrlFromParams({
            baseUrl: this.url,
            id,
            path,
        });
        const method: string = 'POST';

        try {
            const response: AxiosResponse = await axios.post(requestUrl, data, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage: string = `error:${error},method:${method},status:${error?.response?.status},url:${error?.response?.url}`;
            throw Error(errorMessage);
        }
    }

    async postImageFile({
        data,
        id,
        path,
    }: { data?: unknown; path?: string; id?: string }): Promise<unknown> {
        const requestUrl: string = getUrlFromParams({
            baseUrl: this.url,
            id,
            path,
        });
        const method: string = 'POST';

        try {
            const formData = new FormData();
            // Assuming data is a Blob or File object
            formData.append('profile', data as Blob);

            const response: AxiosResponse = await axios.post(
                requestUrl,
                formData,
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            return response?.data;
        } catch (error) {
            const errorMessage: string = `error:${error},method:${method},status:${error.response?.status},url:${error.response?.url}`;
            throw Error(errorMessage);
        }
    }

    async put({ data, id, path }: { data?: unknown; path?: string; id?: string }): Promise<unknown> {
        const requestUrl: string = getUrlFromParams({
            baseUrl: this.url,
            id,
            path,
        });

        const method: string = 'PUT';

        try {
            const response: AxiosResponse = await axios.put(requestUrl, data, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage: string = `error:${error},method:${method},status:${error.response?.status},url:${error.response?.url}`;
            throw Error(errorMessage);
        }
    }

    async delete({ id, path }: { id?: string; path?: string }) {
        const requestUrl: string = getUrlFromParams({
            baseUrl: this.url,
            id,
            path,
        });
        const method: string = 'DELETE';

        try {
            const response: AxiosResponse = await axios.delete(requestUrl, {
                withCredentials: true,
            });
            return response?.data;
        } catch (error) {
            const errorMessage: string = `error:${error},method:${method},status:${error.response?.status},url:${error.response?.url}`;
            throw Error(errorMessage);
        }
    }
}
