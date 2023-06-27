// import BaseProxy from './proxy';
import UserProxy from './user.proxy';

// eslint-disable-next-line import/prefer-default-export
export const AuthProxy = new UserProxy(process.env.AUTH_URL);

// export const DogsProxy = new Proxy(process.env.DOGS_URL);
