import { Theme } from '@mui/material';

import {
    MUI_COLORS_LIST,
    MUI_INPUT_TYPES_LIST,
    MUI_INPUT_VARIANTS,
} from '../utils/constants/mui-props.constants';

// "error" | "info" | "primary" | "success" | "warning"
export type MuiColor = (typeof MUI_COLORS_LIST)[number];

// "number" | "text" | "password" | "email" | "search"
export type MuiInputType = (typeof MUI_INPUT_TYPES_LIST)[number];

// "outlined" | "filled" | "standard"
export type MuiInputVariant = (typeof MUI_INPUT_VARIANTS)[number];

export type MuiStyledCmpThemeProp = { theme: Theme };
