import { Theme } from '@mui/material';

import { MUI_COLORS_LIST } from '../constants/mui-props.constants';

export type MUIColor = (typeof MUI_COLORS_LIST)[number];

export type MUIStyledCmpThemeProp = { theme: Theme };
