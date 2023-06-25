import Proxy from './proxy';

export const DogsProxy = new Proxy(process.env.DOGS_URL);

export const AuthProxy = new Proxy(process.env.AUTH_URL);
