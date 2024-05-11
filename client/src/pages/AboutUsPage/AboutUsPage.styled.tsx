import { styled } from '@mui/material/styles';
import { Typography as MuiTypography, Box as MuiBox } from '@mui/material';

export const PageContainer = styled(MuiBox)`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 75px;
    padding: 30px 50px;
    box-sizing: border-box;
    overflow-y: auto;

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

export const TextSectionContainer = styled(MuiBox)`
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
