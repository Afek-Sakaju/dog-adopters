import DOGS_BREEDS_LIST from '../../data/DOGS_BREEDS_LIST.json';
import DOGS_CHARACTERISTICS_LIST from '../../data/DOGS_CHARACTERISTICS_LIST.json';
import type { StandardStringsObject } from '../../types/common.types';

export const APP_PATHS: Readonly<StandardStringsObject> = Object.freeze({
    CREATE_DOG: '/dogs/new',
    DOGS_DATA: '/dogs',
    LOGIN: '/login',
    REGISTER: '/register',
    USERS: '/users',
});

export const DOGS_CHARACTERISTICS: string[] =
    DOGS_CHARACTERISTICS_LIST?.DOGS_CHARACTERISTICS ?? [];

export const DOGS_BREEDS: string[] = DOGS_BREEDS_LIST?.DOGS_BREEDS ?? [];

export const DOG_MAX_CHARACTERISTICS: number = 4;

export const MIN_DOG_AGE: number = 0;
export const MAX_DOG_AGE: number = 20;

export const ALLOWED_IMAGE_FORMATS: Readonly<string[]> = ['png', 'jpg', 'jpeg'];

export const MAX_DOG_RACE_TEXT_LENGTH: number = 22;

// ['image/png', 'image/jpg', 'image/jpeg']
export const FILE_IMAGE_TYPES: Readonly<string[]> = ALLOWED_IMAGE_FORMATS.map(
    (t) => `image/${t}`
);

export const IMAGES_SRC: Readonly<StandardStringsObject> = Object.freeze({
    EDIT_DOG_BG: '/hearts-bg.png',
    CREATE_DOG_BG: '/hearts-bg.png',
    DOGS_DATA_BG: '/hearts-bg.png',
    LOGIN_BG: '/dogs-run-bg.jpg',
    REGISTER_BG: '/dogs-run-bg.jpg',
    NAV_APP_LOGO: '/nav-logo.png',
    APP_LOGO_TRANSPARENT: '/app-logo-transparent-bg.png',
});
