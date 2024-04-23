import type { MuiColor, MuiRadioGroupSizes } from './mui.types';

export interface StandardStringsObject {
    [key: string]: string;
}

export interface AutocompleteSelectProperties {
    label: string;
    value: unknown;
}

export type RadioGroupOption = {
    label?: string;
    value?: unknown;
    color?: MuiColor;
    size?: MuiRadioGroupSizes;
};

export type SelectOption = {
    label?: string;
    value?: string | number | readonly string[];
};
