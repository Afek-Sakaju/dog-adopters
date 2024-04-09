import DOGS_BREEDS_LIST from '#data/DOGS_BREEDS_LIST.json';
import DOGS_CHARACTERISTICS_LIST from '#data/DOGS_CHARACTERISTICS_LIST.json';

export const APP_PATHS = Object.freeze({
    CREATE_DOG: '/dogs/new',
    DOGS_DATA: '/dogs',
    LOGIN: '/login',
    REGISTER: '/register',
    USERS: '/users',
});

export const { DOGS_CHARACTERISTICS } = DOGS_CHARACTERISTICS_LIST;

export const { DOGS_BREEDS } = DOGS_BREEDS_LIST;

export const DOG_MAX_CHARACTERISTICS = 4;

export const MIN_DOG_AGE = 0;
export const MAX_DOG_AGE = 20;

export const ALLOWED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg'];

export const MAX_DOG_RACE_TEXT_LENGTH = 13;

// ['image/png', 'image/jpg', 'image/jpeg']
export const FILE_IMAGE_TYPES = ALLOWED_IMAGE_FORMATS.map((t) => `image/${t}`);

export const DOGS_LIST_DEFAULT_FILTRATION = Object.freeze({
    gender: '',
    maxAge: MAX_DOG_AGE,
    minAge: MIN_DOG_AGE,
    name: '',
    race: '',
    status: '',
});

export const IMAGES_SRC = Object.freeze({
    EDIT_DOG_BG: '/hearts-bg.png',
    CREATE_DOG_BG: '/hearts-bg.png',
    DOGS_DATA_BG: '/hearts-bg.png',
    LOGIN_BG: '/dogs-run-bg.jpg',
    REGISTER_BG: '/dogs-run-bg.jpg',
    NAV_APP_LOGO: '/nav-logo.png',
});
