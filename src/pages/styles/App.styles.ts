import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles'
import styled from 'styled-components';

export const Background = styled(Box)(({ theme }) => ({
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    padding: theme.spacing(4),
    background: `linear-gradient(to right, ${theme.palette.gradientBackgroundColors.lightPink}, ${alpha(theme.palette.gradientBackgroundColors.lightBlue, 0.8)})`,
}));
  
  