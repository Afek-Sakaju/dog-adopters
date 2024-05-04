import { styled } from '@mui/material/styles';

import { Button as MyButton } from '@/base-components';
import { MAIN_COLORS } from '@/utils';

// eslint-disable-next-line import/prefer-default-export
export const StyledSubmitButton = styled(MyButton)(({ theme }) => ({
    width: '45%',
    height: '47px',
    fontWeight: 'bolder',
    textTransform: 'none',
    color: MAIN_COLORS.textSecondary,

    '&:hover': {
        color: MAIN_COLORS.textSecondaryLight,
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8em',
    },
}));
