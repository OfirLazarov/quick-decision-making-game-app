import { Button } from '@mui/material';
import NavigationArrow from '../assets/navigationArrow.svg';

type Props = {
  onClick: () => void;
  text?: 'start' | 'restart';
  disabled?:boolean,
};

const buttonLabels = {
  start: 'Start Game',
  restart: 'Restart Game',
};

const ActionButton = ({ onClick, text = 'start',disabled = false}: Props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      startIcon={<img src={NavigationArrow} alt="arrow" style={{ width: 14, height: 16 }} />}
    >
      {buttonLabels[text]}
    </Button>
  );
};

export default ActionButton;
