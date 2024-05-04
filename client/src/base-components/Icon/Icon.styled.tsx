import { styled } from '@mui/material/styles';
import { Tooltip as MuiTooltip, Box as MuiBox } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const Tooltip = MuiTooltip;

export const IconContainer = styled(MuiBox)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
