import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import ScorePage from './pages/ScorePage'
import Header from './components/Header';
import { Background } from './pages/styles/App.styles';

function App() {
  return (
    <Background>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
    </Background>
  );
}

export default App;
