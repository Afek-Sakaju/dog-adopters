import { styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';
import { TbEraser as CleanResetIcon } from 'react-icons/tb';

import { Icon as MyIcon } from '@/base-components';
import { MAIN_COLORS } from '@/utils';

export const ClearIconContainer = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'isButtonOfRadioGroup',
})(({ isButtonOfRadioGroup }: { isButtonOfRadioGroup?: boolean }) => ({
    position: 'absolute',
    ...(isButtonOfRadioGroup ? { top: '32px' } : { top: '12px' }),
    right: '0',
    minWidth: '27px',
    minHeight: '27px',
    maxWidth: '27px',
    maxHeight: '27px',
    padding: '0',
}));

export const Icon = styled(MyIcon)`
    padding: 4px;
    border-radius: 100%;
    border: 1px solid ${MAIN_COLORS.bgAltColor};

    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${MAIN_COLORS.bgAltColor};
    }
    overflow: hidden;
`;

export const ClearIcon = styled(CleanResetIcon)`
    font-size: 1.2rem;
    color: ${MAIN_COLORS.feature};
`;
