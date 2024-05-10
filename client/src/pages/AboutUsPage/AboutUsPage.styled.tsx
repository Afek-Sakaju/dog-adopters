import { styled } from '@mui/material/styles';
import { Typography as MuiTypography, Box as MuiBox } from '@mui/material';

export const PageContainer = styled('div')`
    width: 100%;
    display: flex;
    margin-top: 125px;
    padding-bottom: 40px;
`;

export const MainContentWrapper = styled(MuiBox)`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 75px;
    padding: 0 50px;
`;

export const TextSectionContainer = styled(MuiBox)`
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
