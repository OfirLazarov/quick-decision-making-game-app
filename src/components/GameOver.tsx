import { Typography, Button } from '@mui/material';
import { GameOverContainer, ButtonRow } from '../components/styles/GameOver.styles';
import ActionButton from '../components/ActionButton';
import { useNavigate } from 'react-router-dom';

const GameOver = ({ score, onRestart }: { score: number; onRestart: () => void }) => {
  const navigate = useNavigate();

  return (
    <GameOverContainer>
      <Typography variant="h2" color="error">GAME OVER!</Typography>
      <Typography variant="h2">[Score {score}]</Typography>
      <ButtonRow>
        <Button variant="outlined" onClick={() => navigate('/score')}>Highscore</Button>
        <ActionButton text="restart" onClick={onRestart} />
      </ButtonRow>
    </GameOverContainer>
  );
};

export default GameOver;
