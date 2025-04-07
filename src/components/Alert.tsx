import React, { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

type AlertType = 'error' | 'info'

interface AlertProps {
  message: string
  type?: AlertType
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`

const AlertBox = styled.div<{ $color: string }>(({ theme, $color }) => ({
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.gray.light}`,
    padding: '12px',
    borderRadius: '12px',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.14)',
    color: $color,
    gap: '20px',
    minWidth: '500px',
    maxWidth: '800px',
  }));

const StyledCancelIcon = styled(CancelIcon)(({ theme }) => ({
    color: theme.palette.error.main,
  }));
  
  const StyledSuccessIcon = styled(CheckCircleIcon)(({ theme }) => ({
    color: theme.palette.info.main,
  }));
  
  const StyledCloseIcon = styled(CloseIcon)`
    cursor: pointer;
    margin-left: auto;
    color: #888;
  `;

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  const [visible, setVisible] = useState(true)
  const theme = useTheme()

  useEffect(() => {
    const handleKeyPress = () => setVisible(true)
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!visible) return null

  const getIcon = () => {
    return type === 'info' ? <StyledSuccessIcon /> : <StyledCancelIcon />;
  };

  const textColor =
    type === 'info' ? theme.palette.info.main : theme.palette.error.main;

  return (
    <Wrapper>
      <AlertBox $color={textColor}>
        {getIcon()}
        <span>{message}</span>
        <StyledCloseIcon onClick={() => setVisible(false)} />
      </AlertBox>
    </Wrapper>
  )
}

export default Alert
