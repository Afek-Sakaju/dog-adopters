import { Theme } from '@mui/material';

import {
    MUI_AVATAR_VARIANTS,
    MUI_BUTTON_VARIANTS,
    MUI_CARD_VARIANTS,
    MUI_COLORS_LIST,
    MUI_INPUT_TYPES_LIST,
    MUI_INPUT_VARIANTS,
    MUI_SIZES_LIST,
} from '../utils/constants/mui-props.constants';

// ~ Color:  "error" | "info" | "primary" | "success" | "warning"
export type MuiColor = (typeof MUI_COLORS_LIST)[number];

// ~ Input Type:  "number" | "text" | "password" | "email" | "search"
export type MuiInputType = (typeof MUI_INPUT_TYPES_LIST)[number];

// ~ Input Variant: "outlined" | "filled" | "standard"
export type MuiInputVariant = (typeof MUI_INPUT_VARIANTS)[number];

// ~ Avatar Variant: "rounded" | "square" | "circular"
export type MuiAvatarVariant = (typeof MUI_AVATAR_VARIANTS)[number];

// ~ Button Variant: "contained" | "text" | "outlined"
export type MuiButtonVariant = (typeof MUI_BUTTON_VARIANTS)[number];

// ~ Button Variant: "undefined" | "standard" | "outlined"
export type MuiCardVariant = (typeof MUI_CARD_VARIANTS)[number];

// ~ Avatar Variant: "small" | "medium" | "large"
export type MuiSize = (typeof MUI_SIZES_LIST)[number];

export type MuiStyledCmpThemeProp = { theme: Theme };
