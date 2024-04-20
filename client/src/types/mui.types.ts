import { Theme } from '@mui/material';

import {
    MUI_COLORS_LIST,
    MUI_INPUT_VARIANTS,
} from '../utils/constants/mui-props.constants';

export type MuiColor = (typeof MUI_COLORS_LIST)[number];

export type MuiInputVariant = (typeof MUI_INPUT_VARIANTS)[number];

export type MuiStyledCmpThemeProp = { theme: Theme };
