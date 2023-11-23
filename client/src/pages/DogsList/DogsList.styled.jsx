import { styled } from '@mui/material/styles';

// eslint-disable-next-line import/prefer-default-export
export const PageContainer = styled('div')`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: lightgray;
    user-select: none;
    background-size: 50px 50px;
    background-image: url('/hearts-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
