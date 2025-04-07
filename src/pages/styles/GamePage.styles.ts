import { Box } from "@mui/material";
import styled from "styled-components";
import { TargetProps } from "../GamePage";


export const GameCard = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '1400px',
    height: 'auto',
    minHeight: '500px',
    aspectRatio: '2 / 1', // roughly 1400:700
    display: 'flex',
    position:'relative',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: '20px',
    border: `1px solid ${theme.palette.gray.light}`,
  }));
  

export const TopBar = styled(Box)<{ gameover?: string }>(({ theme, gameover }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: gameover === 'gameover' ? 'center' : 'space-between',
    padding: '8px 25px',
    borderBottom: `1px solid ${theme.palette.gray.main}`,
    boxShadow: '0 5px 16px rgba(0, 0, 0, 0.1)',
    height: '71px',
}));

export const GameArea = styled(Box)(({ theme }) => ({
flex: 1,
padding: theme.spacing(4),
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

export const TargetSquare = styled(Box)<TargetProps>(({ theme, side }) => ({
    width: '52px',
    height: '52px',
    backgroundColor: theme.palette.pink.main, 
    borderRadius: '10.25px',
    border: `7.45px solid ${theme.palette.common.white}`,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    ...(side === 'left' ? { left: '10%' } : { right: '10%' }),
}));