export const MUI_VARIANTS = {
    AVATAR: ['rounded', 'square', 'circular'],
    BUTTON: ['contained', 'text', 'outlined'],
    DRAWER: ['persistent', 'temporary', 'permanent'],
    INPUT: ['outlined', 'filled', 'standard'],
    /* The intentional use of "undefined" has a distinct purpose.
		While this variant's name lacks documentation or reference, 
		MUI's Card exhibits specific behavior when the value is set to undefined. */
    CARD: [undefined, 'standard', 'outlined'],
};

export const MUI_PLACEMENTS = {
    RADIO_GROUP_LABEL: {
        VALUES: {
            TOP: 'top',
            START: 'start',
            BOTTOM: 'bottom',
            END: 'end',
        },
        LIST: ['top', 'start', 'bottom', 'end'],
    },
    DRAWER: {
        VALUES: {
            LEFT: 'left',
            RIGHT: 'right',
            TOP: 'top',
            BOTTOM: 'bottom',
        },
        LIST: ['left', 'right', 'top', 'bottom'],
    },
};

export const MUI_COLORS = {
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
};
export const MUI_COLORS_LIST = [
    'primary',
    'success',
    'warning',
    'error',
    'info',
];

export const MUI_SIZES = { SMALL: 'small', MEDIUM: 'medium', LARGE: 'large' };
export const MUI_SIZES_LIST = ['small', 'medium', 'large'];

export const MUI_INPUT_TYPES = {
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email',
    SEARCH: 'search',
    NUMBER: 'number',
};
export const MUI_INPUT_TYPES_LIST = [
    'text',
    'password',
    'email',
    'search',
    'number',
];

export const MUI_INPUT_MARGIN_LIST = ['normal', 'dense'];
