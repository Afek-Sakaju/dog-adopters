import { styled } from '@mui/material/styles';
import MuiDialog from '@mui/material/Dialog';

import { IMAGES_SRC } from '@utils';
import { Button } from '@base-components';
import {
    DogsDataFilterForm as MyDogsDataFilterForm,
    DogsDataList as MyDogsDataList,
} from '@components';

export const PageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgray',
    backgroundImage: `url(${IMAGES_SRC.DOGS_DATA_BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

export const DogsDataFilterForm = MyDogsDataFilterForm;

export const DogsDataList = MyDogsDataList;

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
