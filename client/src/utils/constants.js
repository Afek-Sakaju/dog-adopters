import DOGS_BREEDS_LIST from '../../DOGS_BREEDS_LIST.json';

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

export const FILE_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const DOG_PAGE_RESPONSES = {
    create: {
        success: 'Dog created successfully',
        failure: 'Failed to create dog',
    },
    edit: { success: 'Dog edited successfully', failure: 'Failed to edit dog' },
};
