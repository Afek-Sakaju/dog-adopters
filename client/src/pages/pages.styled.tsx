import { styled, css } from '@mui/material/styles';

import { Box as MuiBox } from '@mui/material';

export const LayoutWrapper = styled(MuiBox)`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const mainScrollbarStyles = css`
    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #dddddd;
        border-radius: 15px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #a7a7a7;
    }
`;
