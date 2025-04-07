import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getLeaderBoard } from "../api/scoreApi";
import LeaderboardTable from "../components/LeaderboardTable";
import { useNavigate } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Loading from "../components/Loading";
import { LeaderboardEntry } from "../types/leaderBoard";
import { PageWrapper, TablePlaceholder } from "./styles/ScorePage.styles";

type LoadStatus = 'loading' | 'success' | 'error';


function ScorePage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [status, setStatus] = useState<LoadStatus>('loading');
  const { width, height } = useWindowSize();
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId');
  const isWinner = leaderboard.length > 0 &&  userId && leaderboard[0]?.userId === userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLeaderBoard();
        setLeaderboard(data);
        setStatus('success');
      } catch (e) {
        console.error("Failed to load leaderboard with error",e);
        setStatus('error');
      }
    };

    fetchData();
  }, []);
  

  return (
    <PageWrapper>
        {isWinner && <Confetti width={width} height={height} recycle={false} />}
        <Typography variant="h1">
            HIGHSCORES TABLE
        </Typography>
        {status !== 'success' ? (
        <TablePlaceholder>
            {status === 'loading' && <Loading />}
            {status === 'error' && (
                <Typography variant="h2" color="error">
                Failed to load leaderboard. Please try again later.
                </Typography>
            )}
        </TablePlaceholder>
        ) : (
        <LeaderboardTable leaderboard={leaderboard} />
        )}
        <ActionButton text='restart' onClick={()=>navigate('/game')}/>
    </PageWrapper>
  );
}

export default ScorePage;


