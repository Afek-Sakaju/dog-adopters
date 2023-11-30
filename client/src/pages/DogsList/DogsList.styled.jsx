import { styled } from '@mui/material/styles';

import { IMAGES_SRC } from '@utils';

// eslint-disable-next-line import/prefer-default-export
export const PageContainer = styled('div')({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'lightgray',
    backgroundImage: `url(${IMAGES_SRC.DOGS_DATA_BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});
