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

export const DOG_FORMS_TITLES = {
    create: 'Create a new dog',
    edit: 'Edit your dog',
};

export const PAGES_RESPONSES = {
    dog: {
        create: {
            success: "The dog's data created successfully",
            failure: 'Failed to create a dog',
        },
        edit: {
            success: "The dog's data edited successfully",
            failure: 'Failed to edit a dog',
        },
        get: { failure: "The dog's data is not found" },
    },
    user: {
        login: {
            success: 'Logged in successfully',
            failure: 'Invalid username or password',
        },
        register: {
            success: "The dog's data created successfully",
            failure: 'Failed to create a dog',
        },
    },
};

export const { DOGS_BREEDS } = DOGS_BREEDS_LIST;

export const DOG_MAX_CHARACTERISTICS = 4;

export const GENDERS_SELECT_PROPERTIES = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
];

export const ALLOWED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg'];

// ['image/png', 'image/jpg', 'image/jpeg']
export const FILE_IMAGE_TYPES = ALLOWED_IMAGE_FORMATS.map((t) => `image/${t}`);
