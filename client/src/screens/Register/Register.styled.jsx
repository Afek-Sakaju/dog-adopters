import { styled } from '@mui/material/styles';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const PageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url('/doggo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
