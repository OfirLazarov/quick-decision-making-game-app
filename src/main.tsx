import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import  theme  from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </StrictMode>
)
