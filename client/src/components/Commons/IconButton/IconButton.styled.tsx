import { styled } from '@mui/material/styles';

import { Icon as MyIcon } from '@/base-components';
import { MAIN_COLORS } from '@/utils';

// eslint-disable-next-line import/prefer-default-export
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
