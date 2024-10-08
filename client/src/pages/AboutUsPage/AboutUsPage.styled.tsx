import { styled } from '@mui/material/styles';
import { Typography as MuiTypography, Box as MuiBox } from '@mui/material';

import { pageScrollbarStyles } from '@/utils';

export const Page = styled(MuiBox)`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 75px;
    padding: 30px 50px;
    box-sizing: border-box;
    overflow-y: auto;

    ${pageScrollbarStyles}
`;

export const TextSection = styled(MuiBox)`
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled(MuiTypography)(({ theme }) => ({
    margin: 0,
    fontSize: '1.45em',
    fontWeight: 'bold',

    [theme.breakpoints.down('md')]: {},
}));

export const Text = styled(MuiTypography)(({ theme }) => ({
    margin: 0,
    whiteSpace: 'pre-wrap',
    fontSize: '1.05em',

    [theme.breakpoints.down('md')]: {},
}));
