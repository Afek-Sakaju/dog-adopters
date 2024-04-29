import { styled } from '@mui/material/styles';

import { Button as MyButton } from '@/base-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled(MyButton)(({ theme }) => ({
    width: '45%',
    height: '47px',
    fontWeight: 'bolder',
    textTransform: 'none',
    color: '#735A47',

    '&:hover': {
        color: '#FEE9C5',
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8em',
    },
}));
