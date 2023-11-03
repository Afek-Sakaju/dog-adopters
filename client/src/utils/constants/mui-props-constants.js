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

export const MUI_SIZES = ['small', 'medium', 'large'];

export const MUI_INPUT_TYPES = [
    'text',
    'password',
    'email',
    'search',
    'number',
];

export const MUI_INPUT_MARGIN = ['normal', 'dense'];

export const MUI_DRAWER_PLACEMENTS = ['left', 'right', 'top', 'bottom'];

export const MUI_RADIO_GROUP_LABEL_PLACEMENT = [
    'end',
    'top',
    'start',
    'bottom',
];
