import { styled } from '@mui/material/styles';
import { Autocomplete as MyAutocomplete } from '@mui/material';

import { mainBorderRadius } from '@/utils';

// eslint-disable-next-line import/prefer-default-export
export const MuiAutocomplete = styled(MyAutocomplete)`
    & .MuiOutlinedInput-notchedOutline {
        border-radius: ${mainBorderRadius};
    }
`;
