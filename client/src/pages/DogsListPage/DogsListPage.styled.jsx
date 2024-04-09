import { styled } from '@mui/material/styles';
import MuiDialog from '@mui/material/Dialog';

import { Button } from '#base-components';
import {
    DogFiltersForm as MyDogFiltersForm,
    DogsList as MyDogsDataList,
} from '#components';

export const PageContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const MainContentContainer = styled('div')`
    display: flex;
    gap: 50px;
    margin-top: 120px;
`;

export const DogFiltersForm = MyDogFiltersForm;

export const DogsList = MyDogsDataList;

export const Dialog = styled(MuiDialog)`
    .MuiPaper-root {
        margin: 5px !important;
    }
`;

export const ShowFiltersButton = styled(Button)(({ theme }) => ({
    display: 'none',
    visibility: 'hidden',
    height: '38px',
    padding: '4px 8px',
    borderRadius: '10px',
    fontSize: '1em',
    fontWeight: 'bold',
    textTransform: 'none',
    outline: '#0959a9 1px solid',

    '&:hover': {
        backgroundColor: '#185ca0',
    },

    [theme.breakpoints.down('md')]: {
        display: 'block',
        visibility: 'visible',
        marginTop: '15px',
    },
}));
