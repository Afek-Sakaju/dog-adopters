import ProxyDB from './proxy';

export const MUI_PLACEMENTS = ['left', 'right', 'top', 'bottom'];

export const DogsProxy = new ProxyDB(process.env.DOGS_URL);

export const AuthProxy = new ProxyDB(process.env.AUTH_URL);
