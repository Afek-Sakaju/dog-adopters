import type { CSSProperties } from 'react';

import type { RadioGroupOption, SelectOption } from '../../types/common.types';

export const FORM_SUBMIT_REDIRECT_DELAY: number = 1500;

export const MAX_DOG_CARDS_PER_PAGE: number = 16;

export const GENDERS_SELECT_PROPERTIES: SelectOption[] = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
];

export const ADOPTION_STATUS_SELECT_PROPERTIES: RadioGroupOption[] = [
    { label: 'Adopted', value: 1 },
    { label: 'Looking for Home', value: 0 },
];

export const STORYBOOK_PAGE_STYLE: Readonly<CSSProperties> = Object.freeze({
    display: 'flex',
    justifyContent: 'center',
    width: '97vw',
    height: '90vh',
});
