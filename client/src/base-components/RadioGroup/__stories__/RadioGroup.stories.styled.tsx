import { styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const StoryPage = styled(MuiBox)`
    display: flex;
    justify-content: center;
    width: 97vw;
    height: 90vh;
`;

export const StoryContentWrapper = styled(MuiBox)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: max-content;
    gap: 30px;
    padding: 30px;
    border: lightgrey 1px solid;
    border-radius: 10px;
`;

export const ColumnBox = styled(MuiBox)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`;

export const InlineBox = styled(MuiBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;
`;
