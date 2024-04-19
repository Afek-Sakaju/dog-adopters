import axios, { AxiosResponse } from 'axios';

import { getUrlFromParams } from '@/utils';

type BaseProxyParams = { url: string };
type getDataProps = { path?: string; params?: object };
type FetchDataByIdProps = { id?: string; path?: string };
type DataModifyRequestProps = { data?: any; path?: string; id?: string };

export default class BaseProxy {
    url: string;

    constructor({ url }: BaseProxyParams) {
        this.url = url;
    }

    async getData({ path, params }: getDataProps): Promise<any> {
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

    async getDataById({ id, path }: FetchDataByIdProps): Promise<any> {
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

    async post({ data, id, path }: DataModifyRequestProps): Promise<any> {
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
    }: DataModifyRequestProps): Promise<any> {
        const requestUrl: string = getUrlFromParams({
            baseUrl: this.url,
            id,
            path,
        });
        const method: string = 'POST';

        try {
            const formData = new FormData();
            formData.append('profile', data); // Assuming data is a Blob or File object

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

    async put({ data, id, path }: DataModifyRequestProps): Promise<any> {
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

    async delete({ id, path }: FetchDataByIdProps) {
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
