import { styled } from '@mui/material/styles';

import { IMAGES_SRC } from '@utils';

// eslint-disable-next-line import/prefer-default-export
export const PageContainer = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: lightgray;
    background-size: 50px 50px;
    background-image: url(${IMAGES_SRC.DOGS_DATA_BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
