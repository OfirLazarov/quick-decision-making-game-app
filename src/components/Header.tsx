import { AppBar,Typography } from '@mui/material';
import styled from 'styled-components';

const AppBarTitle = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    boxShadow: '0px 5px 16px rgba(12, 12, 12, 0.3)', 
  }));

const Header = () => {
  return (
    <AppBarTitle position="fixed">
        <Typography variant="h4">mavens Game</Typography> 
    </AppBarTitle>
  );
};

export default Header;
