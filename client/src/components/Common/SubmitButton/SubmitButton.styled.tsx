import { styled } from '@mui/material/styles';

import { Button as MyButton } from '@/base-components';
import { MAIN_COLORS } from '@/utils';

// eslint-disable-next-line import/prefer-default-export
export const StyledSubmitButton = styled(MyButton)`
    min-height: 47px;
    font-weight: bolder;
    text-transform: none;
    color: ${MAIN_COLORS.textSecondary};

    &:hover {
        color: ${MAIN_COLORS.textSecondaryLight};
    }
`;
