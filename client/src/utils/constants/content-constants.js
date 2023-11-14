import { ALLOWED_IMAGE_FORMATS } from './data-constants';

export const PAGES_RESPONSES = {
    DOG_PAGE: {
        CREATE: {
            success: 'Data for the dog was successfully created.',
            failure: 'Dog creation could not be completed.',
        },
        EDIT: {
            success: "The dog's information was successfully edited.",
            failure: 'Dog information editing failed.',
        },
        GET: { failure: 'Unable to locate data for the dog' },
        DELETE: {
            success: "The dog's information was successfully deleted.",
            failure: 'Dog data deletion failed.',
        },
    },
    USER_PAGE: {
        LOGIN: {
            success: 'Logged in successfully.',
            failure: 'Invalid username or password.',
        },
        REGISTER: {
            success: 'Registration complete.',
            failure: 'Registration failed, Choose a different username.',
        },
    },
};

export const TITLES = {
    CREATE_DOG_PAGE: 'Create a new dog',
    EDIT_DOG_PAGE: 'Edit your dog',
    DOGS_DATA_FILTER_FORM: "Filter Dog's data",
    LOGIN_PAGE: 'Sign In',
    DOGS_LIST_PAGE: 'Discover Your New Best Friend:',
};

export const COMPONENTS_CONTENT = {
    DOG_CARD_DEFAULT_NAME: 'A dog',
    DOG_CARD_RACE_PLACEHOLDER: "I'm a paw-some companion!",
    DOG_CARD_ADOPTED: 'I have been adopted.',
    DOG_CARD_NOT_ADOPTED: "I'm looking for an adoption!",
    DOG_FORM_SUPPORTED_IMAGES: `Supports: ${ALLOWED_IMAGE_FORMATS.join(' / ')}`,
    DOG_FILTER_FORM_SUBMIT: 'Apply Filters',
    LOGIN_PAGE_SIGNUP_REDIRECT: "Don't have an account yet ? ",
    REGISTER_PAGE_SIGNIN_REDIRECT: 'Already have an account ? ',
    AUTH_PAGES_REDIRECT_LINK: 'click here',
};

export const GENDERS_SELECT_PROPERTIES = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
];

export const ADOPTION_STATUS_SELECT_PROPERTIES = [
    { label: 'Adopted', value: 0 },
    { label: 'Looking for Home', value: 1 },
];

export const STORYBOOK_PAGE_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    width: '97vw',
    height: '90vh',
};
