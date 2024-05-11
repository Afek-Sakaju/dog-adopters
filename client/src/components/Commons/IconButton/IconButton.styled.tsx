import { styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

import { Icon as MyIcon } from '@/base-components';
import { MAIN_COLORS } from '@/utils';

export const IconContainer = styled(MuiBox)`
    width: 27px;
    height: 27px;
    padding: 0;
`;

export const Icon = styled(MyIcon)`
    padding: 4px;
    border-radius: 100%;
    border: 1px solid ${MAIN_COLORS.bgAltColor};

    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${MAIN_COLORS.bgAltColor};
    }
    overflow: hidden;
`;


