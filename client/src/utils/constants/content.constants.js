import { ALLOWED_IMAGE_FORMATS } from './data.constants';

export const FORM_SUBMIT_REDIRECT_DELAY = 1500;

export const MAX_DOG_CARDS_PER_PAGE = 18;

export const PAGES_ALERT_RESPONSES = Object.freeze({
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
});

export const PAGES_TITLES = Object.freeze({
    CREATE_DOG: 'Create a new dog',
    EDIT_DOG: 'Edit your dog',
    LOGIN: 'Log in',
    REGISTER: 'Register',
    DOGS_DATA: 'Discover Your New Best Friend',
});

export const COMPONENTS_CONTENT = Object.freeze({
    DOG_CARD: {
        DEFAULT_NAME: 'A dog',
        RACE_PLACEHOLDER: "I'm a paw-some companion!",
        ADOPTED: 'I have been adopted.',
        NOT_ADOPTED: "I'm looking for an adoption!",
    },
    DOG_FORM: {
        TITLE: "Filter Dog's data",
        SUPPORTED_IMAGES: `${ALLOWED_IMAGE_FORMATS.join(' / ')}`,
    },
    AUTH_FORM: {
        SIGN_IN_REDIRECT: 'Already have an account ? ',
        SIGN_UP_REDIRECT: "Don't have an account yet ? ",
        REDIRECT_LINK: 'click here',
    },
    FILTER_DOGS_FORM: {
        SUBMIT: 'Apply Filters',
    },
    DOGS_DATA: {
        DATA_NOT_FOUND: 'Unfortunately, there are no dogs to display.',
    },
    NAV_BAR: {
        LOGIN_BUTTON: 'Log-In',
        LOGOUT_BUTTON: 'Log-Out',
        REGISTER_BUTTON: 'Register',
    },
    LOADER: {
        LOGIN_SUCCESS: 'Redirecting to Home Page..',
        REGISTER_SUCCESS: 'Redirecting to Login Page..',
        DOG_FORM_SUCCESS: 'Redirecting to Dogs List..',
        DOG_FORM_WAIT: 'Please Wait..',
    },
});

export const GENDERS_SELECT_PROPERTIES = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
];

export const ADOPTION_STATUS_SELECT_PROPERTIES = [
    { label: 'Adopted', value: 1 },
    { label: 'Looking for Home', value: 0 },
];

export const STORYBOOK_PAGE_STYLE = Object.freeze({
    display: 'flex',
    justifyContent: 'center',
    width: '97vw',
    height: '90vh',
});
