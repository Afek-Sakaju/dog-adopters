import DOGS_BREEDS_LIST from '@data/DOGS_BREEDS_LIST.json';

export const DOG_CHARACTERISTICS_OPTIONS = [
    'Adventurous',
    'Aggressive',
    'Avoid strangers',
    'Energized',
    'Friendly',
    'Good with other dogs',
    'Love strangers',
    'Loves kids',
    'Relaxed',
    'Scared',
    'Smart',
    'Stubborn',
    'Warm',
];

export const { DOGS_BREEDS } = DOGS_BREEDS_LIST;

export const DOG_MAX_CHARACTERISTICS = 4;

export const ALLOWED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg'];

// ['image/png', 'image/jpg', 'image/jpeg']
export const FILE_IMAGE_TYPES = ALLOWED_IMAGE_FORMATS.map((t) => `image/${t}`);
