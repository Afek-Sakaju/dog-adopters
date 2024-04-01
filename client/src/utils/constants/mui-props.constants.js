export const MUI_VARIANTS = Object.freeze({
    AVATAR: {
        VALUES: {
            ROUNDED: 'rounded',
            SQUARE: 'square',
            CIRCULAR: 'circular',
        },
        LIST: ['rounded', 'square', 'circular'],
    },
    BUTTON: {
        VALUES: {
            CONTAINED: 'contained',
            TEXT: 'text',
            OUTLINED: 'outlined',
        },
        LIST: ['contained', 'text', 'outlined'],
    },
    DRAWER: {
        VALUES: {
            PERSISTENT: 'persistent',
            TEMPORARY: 'temporary',
            PERMANENT: 'permanent',
        },
        LIST: ['persistent', 'temporary', 'permanent'],
    },
    INPUT: {
        VALUES: {
            OUTLINED: 'outlined',
            FILLED: 'filled',
            STANDARD: 'standard',
        },
        LIST: ['outlined', 'filled', 'standard'],
    },
    CARD: {
        VALUES: {
            /* The intentional use of "undefined" has a distinct purpose.
						While this variant's name lacks documentation or reference, 
						MUI's Card have specific style when the value is undefined. */
            UNDEFINED: undefined,
            STANDARD: 'standard',
            OUTLINED: 'outlined',
        },
        LIST: [undefined, 'standard', 'outlined'],
    },
});

export const MUI_PLACEMENTS = Object.freeze({
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
});

export const MUI_COLORS = Object.freeze({
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
});
export const MUI_COLORS_LIST = [
    'primary',
    'success',
    'warning',
    'error',
    'info',
];

export const MUI_SIZES = Object.freeze({
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
});
export const MUI_SIZES_LIST = ['small', 'medium', 'large'];

export const MUI_INPUT_TYPES = Object.freeze({
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email',
    SEARCH: 'search',
    NUMBER: 'number',
});
export const MUI_INPUT_TYPES_LIST = [
    'text',
    'password',
    'email',
    'search',
    'number',
];

export const MUI_INPUT_MARGIN_LIST = ['normal', 'dense'];

export const MUI_LOADER_VARIANTS = Object.freeze({
    CIRCULAR: 'circular',
    LINEAR: 'linear',
});
export const MUI_LOADER_VARIANTS_LIST = ['circular', 'linear'];
