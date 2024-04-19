import type { CSSProperties } from 'react';

import { ALLOWED_IMAGE_FORMATS } from './data.constants';
import type {
    AutocompleteSelectProperties,
    StandardStringsObject,
} from '../../types/common.types';

export const FORM_SUBMIT_REDIRECT_DELAY: number = 1500;

export const MAX_DOG_CARDS_PER_PAGE: number = 18;

// Will be converted to i18 translation
export const PAGES_ALERT_RESPONSES: Readonly<object> = Object.freeze({
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

// Will be converted to i18 translation
export const PAGES_TITLES: Readonly<StandardStringsObject> = Object.freeze({
    CREATE_DOG: 'Create a new dog',
    EDIT_DOG: 'Edit your dog',
    LOGIN: 'Log in',
    REGISTER: 'Register',
});

// Will be converted to i18 translation
export const COMPONENTS_CONTENT: Readonly<object> = Object.freeze({
    DOG_CARD: {
        DEFAULT_NAME: 'A dog',
        RACE_PLACEHOLDER: 'Unknown Race',
    },
    DOG_FORM: {
        TITLE: 'Filtration Options',
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
        DATA_NOT_FOUND: 'The filtered list is empty, try different filters.',
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

export const GENDERS_SELECT_PROPERTIES: Readonly<
    Array<AutocompleteSelectProperties>
> = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
];

export const ADOPTION_STATUS_SELECT_PROPERTIES: Readonly<
    Array<AutocompleteSelectProperties>
> = [
    { label: 'Adopted', value: 1 },
    { label: 'Looking for Home', value: 0 },
];

export const STORYBOOK_PAGE_STYLE: Readonly<CSSProperties> = Object.freeze({
    display: 'flex',
    justifyContent: 'center',
    width: '97vw',
    height: '90vh',
});
