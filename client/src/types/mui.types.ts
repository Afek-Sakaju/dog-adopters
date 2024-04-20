import { Theme } from '@mui/material';

import {
    MUI_AVATAR_VARIANTS,
    MUI_COLORS_LIST,
    MUI_INPUT_TYPES_LIST,
    MUI_INPUT_VARIANTS,
} from '../utils/constants/mui-props.constants';

// ~ Color:  "error" | "info" | "primary" | "success" | "warning"
export type MuiColor = (typeof MUI_COLORS_LIST)[number];

// ~ Input Type:  "number" | "text" | "password" | "email" | "search"
export type MuiInputType = (typeof MUI_INPUT_TYPES_LIST)[number];

// ~ Input Variant: "outlined" | "filled" | "standard"
export type MuiInputVariant = (typeof MUI_INPUT_VARIANTS)[number];

// ~ Avatar Variant: "rounded" | "square" | "circular"
export type MuiAvatarVariant = (typeof MUI_AVATAR_VARIANTS)[number];

export type MuiStyledCmpThemeProp = { theme: Theme };
