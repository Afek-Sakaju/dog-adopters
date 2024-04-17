import { StandardStringsObject } from '../types/common.types';

export const MUI_VARIANTS: Readonly<object> = Object.freeze({
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

export const MUI_PLACEMENTS: Readonly<object> = Object.freeze({
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

export const MUI_COLORS: Readonly<StandardStringsObject> = Object.freeze({
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
});
export const MUI_COLORS_LIST: Readonly<string[]> = [
    'primary',
    'success',
    'warning',
    'error',
    'info',
];

export const MUI_SIZES: Readonly<StandardStringsObject> = Object.freeze({
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
});
export const MUI_SIZES_LIST: Readonly<string[]> = ['small', 'medium', 'large'];

export const MUI_INPUT_TYPES: Readonly<StandardStringsObject> = Object.freeze({
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email',
    SEARCH: 'search',
    NUMBER: 'number',
});
export const MUI_INPUT_TYPES_LIST: Readonly<string[]> = [
    'text',
    'password',
    'email',
    'search',
    'number',
];

export const MUI_INPUT_MARGIN_LIST: Readonly<string[]> = ['normal', 'dense'];

export const MUI_LOADER_VARIANTS: Readonly<StandardStringsObject> =
    Object.freeze({
        CIRCULAR: 'circular',
        LINEAR: 'linear',
    });
export const MUI_LOADER_VARIANTS_LIST: Readonly<string[]> = [
    'circular',
    'linear',
];
