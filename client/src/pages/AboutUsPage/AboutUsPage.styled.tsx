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

    ${({ theme }) => `
        ${theme.breakpoints.down('lg')} {
            gap: 50px;
            padding: 30px 35px;
        }

        ${theme.breakpoints.down('md')} {
            gap: 40px;
            padding: 30px 25px;
        }

        ${theme.breakpoints.down('sm')} {
            gap: 30px;
            padding: 30px 15px;
        }
    `}
`;

export const TextSection = styled(MuiBox)`
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${({ theme }) => `
        ${theme.breakpoints.down('md')} {
            width: 90%;
        }

        ${theme.breakpoints.down('sm')} {
            width: 100%;    
            gap: 5px;
        }
    `}
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
