import { css } from '@emotion/react';

export const pageScrollbarStyles = css`
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

export const containerScrollbarStyles = css`
    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #dddddd;
        border-radius: 13px;
        border: 6px solid transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #a7a7a7;
    }
`;
