import { Theme } from '@mui/material';

import {
    MUI_AVATAR_VARIANTS,
    MUI_BUTTON_VARIANTS,
    MUI_CARD_VARIANTS,
    MUI_COLORS_LIST,
    MUI_DRAWER_PLACEMENTS,
    MUI_DRAWER_VARIANTS,
    MUI_INPUT_MARGIN_LIST,
    MUI_INPUT_TYPES_LIST,
    MUI_INPUT_VARIANTS,
    MUI_LOADER_VARIANTS_LIST,
    MUI_RADIO_GROUP_PLACEMENT,
    MUI_RADIO_GROUP_SIZES,
    MUI_SIZES_LIST,
} from '../utils/constants/mui-props.constants';

// ~ Color:  "error" | "info" | "primary" | "success" | "warning"
export type MuiColor = (typeof MUI_COLORS_LIST)[number];

// ~ Input Type:  "number" | "text" | "password" | "email" | "search"
export type MuiInputType = (typeof MUI_INPUT_TYPES_LIST)[number];

// ~ Input Variant: "outlined" | "filled" | "standard"
export type MuiInputVariant = (typeof MUI_INPUT_VARIANTS)[number];

// ~ Input Variant: "normal" | "dense"
export type MuiInputMargin = (typeof MUI_INPUT_MARGIN_LIST)[number];

// ~ Avatar Variant: "rounded" | "square" | "circular"
export type MuiAvatarVariant = (typeof MUI_AVATAR_VARIANTS)[number];

// ~ Button Variant: "contained" | "text" | "outlined"
export type MuiButtonVariant = (typeof MUI_BUTTON_VARIANTS)[number];

// ~ Card Variant: "undefined" | "standard" | "outlined"
export type MuiCardVariant = (typeof MUI_CARD_VARIANTS)[number];

// ~ Loader Variant: "circular" | "linear"
export type MuiLoaderVariant = (typeof MUI_LOADER_VARIANTS_LIST)[number];

// ~ Drawer Variant: "persistent" | "temporary" | "permanent"
export type MuiDrawerVariant = (typeof MUI_DRAWER_VARIANTS)[number];

// ~ Drawer Placement: "left" | "right" | "top" | "bottom"
export type MuiDrawerPlacement = (typeof MUI_DRAWER_PLACEMENTS)[number];

// ~ Radio Group Placement: "top" | "bottom" | "start" | "end"
export type MuiRadioGroupPlacement = (typeof MUI_RADIO_GROUP_PLACEMENT)[number];

// ~ Radio Group Sizes: 'small' | 'medium'
export type MuiRadioGroupSizes = (typeof MUI_RADIO_GROUP_SIZES)[number];

// ~ Size: "small" | "medium" | "large"
export type MuiSize = (typeof MUI_SIZES_LIST)[number];
