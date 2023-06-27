import Proxy from './proxy';
import UserProxy from './user.proxy';

export const DogsProxy = new Proxy(process.env.DOGS_URL);
export const AuthProxy = new UserProxy(process.env.AUTH_URL);
