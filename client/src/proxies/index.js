import UserDataProxy from './user.proxy';
import DogDataProxy from './dogs.proxy';

export const AuthProxy = new UserDataProxy(process.env.AUTH_URL);

export const DogProxy = new DogDataProxy(process.env.DOGS_URL);
