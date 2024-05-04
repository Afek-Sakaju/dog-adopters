import UserDataProxy from './user.proxy';
import DogDataProxy from './dogs.proxy';

export const AuthProxy: UserDataProxy = new UserDataProxy({
    url: process.env.SERVER_AUTH_URL,
});

export const DogProxy: DogDataProxy = new DogDataProxy({
    url: process.env.SERVER_DOGS_URL,
});
