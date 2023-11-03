export const PAGES_RESPONSES = {
    DOG_PAGE: {
        CREATE: {
            SUCCESS: 'Data for the dog was successfully created.',
            FAILURE: 'Dog creation could not be completed.',
        },
        EDIT: {
            SUCCESS: "The dog's information was successfully edited.",
            FAILURE: 'Dog information editing failed.',
        },
        GET: { FAILURE: 'Unable to locate data for the dog' },
        DELETE: {
            SUCCESS: "The dog's information was successfully deleted.",
            FAILURE: 'Dog data deletion failed.',
        },
    },
    USER_PAGE: {
        LOGIN: {
            SUCCESS: 'Logged in successfully.',
            FAILURE: 'Invalid username or password.',
        },
        REGISTER: {
            SUCCESS: 'Registration complete.',
            FAILURE: 'Registration failed, Choose a different username.',
        },
    },
};

export const GENDERS_SELECT_PROPERTIES = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
];

export const ADOPTION_STATUS_SELECT_PROPERTIES = [
    { label: 'Adopted', value: 0 },
    { label: 'Looking for Home', value: 1 },
];

export const DOG_FORMS_TITLES = {
    create: 'Create a new dog',
    edit: 'Edit your dog',
    DOGS_DATA_FILTER_FORM: "Filter Dog's data",
};

export const STORY_PAGE_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    width: '97vw',
    height: '90vh',
};
