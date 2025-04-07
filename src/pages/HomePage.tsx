import {  useState } from 'react'
import { TextField, Typography } from '@mui/material'
import { createUser } from '../api/userApi'
import { useNavigate } from 'react-router-dom'
import ActionButton from '../components/ActionButton';
import { ButtonsRow, Card } from './styles/HomePage.styles.ts';

function HomePage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleStart = async () => {
    try {
      const userId = await createUser(username)
      localStorage.setItem('userId', userId)
      localStorage.setItem('username', username) 
      navigate('/game', { state: { username } })
    } catch (err) {
      console.error(err)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && username.trim()) {
      handleStart();
    }
  };


  return (
    <>
        <Typography variant="h1" textAlign="center">
            Welcome to Mavens Game
        </Typography>
        <Card>
            <Typography variant="body1">
            Enter a player name
            </Typography>
            <ButtonsRow>
                <TextField 
                    variant="outlined"
                    placeholder="Input"
                    value={username}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <ActionButton onClick={handleStart} text="start" disabled={!username.trim()}/>
            </ButtonsRow>
        </Card>
    </>
  );
}

export default HomePage
