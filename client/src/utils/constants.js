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
            success: 'Data for the dog was successfully created.',
            failure: 'Dog creation could not be completed.',
        },
        edit: {
            success: "The dog's information was successfully edited.",
            failure: 'Dog information editing failed.',
        },
        get: { failure: 'Unable to locate data for the dog' },
        delete: {
            success: "The dog's information was successfully deleted.",
            failure: 'Dog data deletion failed.',
        },
    },
    user: {
        login: {
            success: 'Logged in successfully.',
            failure: 'Invalid username or password.',
        },
        register: {
            success: 'Registration complete.',
            failure: 'Registration failed, Choose a different username.',
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

export const STORY_PAGE_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '97vw',
    height: '91vh',
};
