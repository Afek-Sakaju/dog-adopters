import { styled } from '@mui/material/styles';

import { Box as MuiBox } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const LayoutWrapper = styled(MuiBox)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    user-select: none;
`;
