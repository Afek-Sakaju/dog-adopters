import type { StandardStringsObject } from '../../types/common.types';

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

export const MUI_SIZES: Readonly<StandardStringsObject> = Object.freeze({
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
});

export const MUI_INPUT_TYPES: Readonly<StandardStringsObject> = Object.freeze({
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email',
    SEARCH: 'search',
    NUMBER: 'number',
});

export const MUI_LOADER_VARIANTS: Readonly<StandardStringsObject> =
    Object.freeze({
        CIRCULAR: 'circular',
        LINEAR: 'linear',
    });

export const MUI_AVATAR_VARIANTS = ['rounded', 'square', 'circular'] as const;

export const MUI_COLORS_LIST = [
    'error',
    'info',
    'primary',
    'success',
    'warning',
] as const;

export const MUI_INPUT_VARIANTS = ['outlined', 'filled', 'standard'] as const;

export const MUI_BUTTON_VARIANTS = ['contained', 'text', 'outlined'] as const;

// Todo: check if the undefined prop is working as expected
export const MUI_CARD_VARIANTS = ['outlined', 'elevation'] as const;

export const MUI_DRAWER_VARIANTS = [
    'persistent',
    'temporary',
    'permanent',
] as const;

export const MUI_LOADER_VARIANTS_LIST = ['circular', 'linear'] as const;

export const MUI_DRAWER_PLACEMENTS = [
    'left',
    'right',
    'top',
    'bottom',
] as const;

export const MUI_RADIO_GROUP_PLACEMENT = [
    'top',
    'start',
    'bottom',
    'end',
] as const;

export const MUI_INPUT_TYPES_LIST = [
    'text',
    'password',
    'email',
    'search',
    'number',
] as const;

export const MUI_INPUT_MARGIN_LIST = ['normal', 'dense'] as const;

export const MUI_SIZES_LIST = ['small', 'medium', 'large'] as const;

export const MUI_RADIO_GROUP_SIZES = ['small', 'medium'] as const;
