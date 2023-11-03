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

export const MUI_COLORS = ['primary', 'success', 'warning', 'error', 'info'];

export const MUI_SIZES = ['small', 'medium', 'large'];

export const MUI_INPUT_TYPES = [
    'text',
    'email',
    'search',
    'number',
    'password',
];

MUI_INPUT_MARGIN = ['normal', 'dense'];

export const MUI_DRAWER_PLACEMENTS = ['left', 'right', 'top', 'bottom'];
