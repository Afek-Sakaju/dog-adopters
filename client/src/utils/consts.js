import ProxyDB from './proxy';

export const MUI_PLACEMENTS = ['left', 'right', 'top', 'bottom'];

export const DB_AUTH_URL = 'http://localhost:3000/auth';

export const DB_DOGS_URL = 'http://localhost:3000/dogs';

export const DogsProxy = new ProxyDB(DB_DOGS_URL);

export const AuthProxy = new ProxyDB(DB_AUTH_URL);
