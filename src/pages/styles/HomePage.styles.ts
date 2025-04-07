import styled from 'styled-components';
import { Box } from '@mui/material';

export const Card = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(2.5),
  borderRadius: '12px',
  boxShadow: '0 0 50px 1px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: theme.spacing(2.5),
}));

export const ButtonsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));
