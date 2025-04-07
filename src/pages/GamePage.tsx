import { Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { saveScore } from "../api/scoreApi";
import GameOver from "../components/GameOver";
import { GameArea, GameCard, TargetSquare, TopBar } from "./styles/GamePage.styles";
import { FALLBACK_USERNAME, MAX_DELAY, MIN_DELAY, SHOW_DURATION } from "../consts";
import { useKeyPress } from "../hooks/useKeyPress";

export interface TargetProps {
  side: 'left' | 'right';
}

function GamePage() {
    const theme = useTheme();
    const location = useLocation();
    const [score, setScore] = useState(0);
    const [bestReactionTime, setBestReactionTime] = useState<number | null>(null);
    const reactionStartRef = useRef(0);
    const [phase, setPhase] = useState<'waiting' | 'showing' | 'gameover'>('waiting');
    const [indicatorSide, setIndicatorSide] = useState<'left' | 'right' | null>(null);
    const [showAlert, setShowAlert] = useState<{ message: string; type: 'info' | 'error' } | null>(null);
  
    const username = useMemo(() => {
      return location.state?.username || localStorage.getItem('username') || FALLBACK_USERNAME;
    }, [location.state]);
  
    const handleShowTargetSquare = useCallback((): void => {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      setIndicatorSide(side);
      setPhase('showing');
      setShowAlert(null);
      reactionStartRef.current = Date.now();
    }, []);
  
    const handleCorrectKeyPress = useCallback((): void => {
      const reactionTime = Date.now() - reactionStartRef.current;
      if (bestReactionTime === null || reactionTime < bestReactionTime) {
        setBestReactionTime(reactionTime);
      }
      setScore((prev) => prev + 1);
      setShowAlert({ message: 'Good job! You succeeded', type: 'info' });
      setPhase('waiting');
    }, [bestReactionTime]);
  
    const handleFailure = useCallback(async (reason: string) => {
      setShowAlert({ message: reason, type: 'error' });
      setPhase('gameover');
      setTimeout(() => setShowAlert(null), 2000);
      try {
        await saveScore(username, score);
      } catch (err) {
        console.error(err);
      }
    }, [username, score]);
  
    const restartGame = useCallback((): void => {
      setScore(0);
      setPhase('waiting');
      setIndicatorSide(null);
      setShowAlert(null);
    }, []);
  
    const handleKeyDown = useCallback((key: string) => {
      if (phase === 'waiting') {
        handleFailure('Too soon!');
        return;
      }
  
      if (phase !== 'showing') return;
  
      if ((indicatorSide === 'left' && key === 'a') || (indicatorSide === 'right' && key === 'd')) {
        handleCorrectKeyPress();
      } else {
        handleFailure('Wrong key');
      }
    }, [phase, indicatorSide, handleCorrectKeyPress, handleFailure]);
  
    // Use the custom keyboard hook
    useKeyPress(['a', 'd'], handleKeyDown, true);
  
    // Handle game phase transitions
    useEffect(() => {
      let timeoutId: number | undefined;
      
      if (phase === 'waiting') {
        const randomDelay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY)) + MIN_DELAY;
        timeoutId = window.setTimeout(handleShowTargetSquare, randomDelay);
      } else if (phase === 'showing') {
        timeoutId = window.setTimeout(() => {
          handleFailure('Too late!');
        }, SHOW_DURATION);
      }
      
      return () => {
        if (timeoutId !== undefined) clearTimeout(timeoutId);
      };
    }, [phase, handleShowTargetSquare, handleFailure]);
  
    return (
      <GameCard>
        <TopBar gameover={phase}>
          <Typography variant="h3">{username}</Typography>
          {bestReactionTime !== null && phase !== 'gameover' && (
            <Typography variant="body2" color={theme.palette.gray.light}>
              Best: {bestReactionTime}ms
            </Typography>
          )}
          {phase !== 'gameover' && (
            <Typography variant="h3" color={theme.palette.pink.main}>
              [Score {score}]
            </Typography>
          )}
        </TopBar>
        <GameArea>
          {phase === 'waiting' && <Loading />}
          {phase === 'showing' && indicatorSide && <TargetSquare side={indicatorSide} />}
          {phase === 'gameover' && <GameOver score={score} onRestart={restartGame} />}
        </GameArea>
        {showAlert && <Alert type={showAlert.type} message={showAlert.message} />}
      </GameCard>
    );
  }
  
  export default GamePage;