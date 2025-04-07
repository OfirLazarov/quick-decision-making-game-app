import { Box } from '@mui/material';
import styled, { css, keyframes } from 'styled-components'


const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`
const LoadingBar = styled(Box)(({ theme }) => css`
  width: 555px;
  height: 11px;
  border-radius: 20px;
  background: linear-gradient(90deg, ${theme.palette.gradientBackgroundColors.lightPink}, ${theme.palette.gradientBackgroundColors.lightBlue});
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border: 3px solid ${theme.palette.secondary.main};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`)

function Loading () {
    return (
        <LoadingBar />
    )
}

export default Loading;
