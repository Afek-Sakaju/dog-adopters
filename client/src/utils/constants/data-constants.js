import DOGS_BREEDS_LIST from '@data/DOGS_BREEDS_LIST.json';
import DOGS_CHARACTERISTICS_LIST from '@data/DOGS_CHARACTERISTICS_LIST.json';

export const { DOGS_CHARACTERISTICS } = DOGS_CHARACTERISTICS_LIST;

export const { DOGS_BREEDS } = DOGS_BREEDS_LIST;

export const DOG_MAX_CHARACTERISTICS = 4;

export const ALLOWED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg'];

// ['image/png', 'image/jpg', 'image/jpeg']
export const FILE_IMAGE_TYPES = ALLOWED_IMAGE_FORMATS.map((t) => `image/${t}`);
