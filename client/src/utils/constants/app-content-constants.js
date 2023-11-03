export const PAGES_RESPONSES = {
    DOG_PAGE: {
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
