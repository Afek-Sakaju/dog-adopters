import { styled } from '@mui/material/styles';
import { Avatar as MuiAvatar, Tooltip as MuiTooltip } from '@mui/material';

import { MAIN_COLORS } from '@/utils';

export const MyAvatar = styled(MuiAvatar)`
    background-color: ${MAIN_COLORS.primary};
`;

export const Tooltip = MuiTooltip;
