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

export const DOG_PAGE_RESPONSES = {
    create: {
        success: 'Dog created successfully',
        failure: 'Failed to create dog',
    },
    edit: { success: 'Dog edited successfully', failure: 'Failed to edit dog' },
    get: { failure: "Dog's data is not found" },
};

export const GENDERS_SELECT_PROPERTIES = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
];

export const ALLOWED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg'];

// ['image/png', 'image/jpg', 'image/jpeg']
export const FILE_IMAGE_TYPES = ALLOWED_IMAGE_FORMATS.map((t) => `image/${t}`);
