import UserDataProxy from './user.proxy';
import DogDataProxy from './dogs.proxy';

export const AuthProxy = new UserDataProxy({
    url: process.env.SERVER_AUTH_URL,
});

export const DogProxy = new DogDataProxy({ url: process.env.SERVER_DOGS_URL });
