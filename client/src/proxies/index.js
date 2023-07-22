import UserProxy from './user.proxy';
import DogDataProxy from './dogs.proxy';

export const AuthProxy = new UserProxy(process.env.AUTH_URL);

export const DogProxy = new DogDataProxy(process.env.DOGS_URL);
