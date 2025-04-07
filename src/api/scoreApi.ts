import { BASE_URL } from "../consts"
import { LeaderboardEntry, LeaderboardResponse } from "../types/leaderBoard"

export const saveScore = async (username: string, score:number): Promise<boolean> => {
  const res = await fetch(`${BASE_URL}/api/saveScore`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, score }),
  })

  if (!res.ok) {
    throw new Error('Failed to save score')
  }

  const data = await res.json()
  return data.success
}

export const getLeaderBoard = async (): Promise<LeaderboardEntry[]> => {
  const res = await fetch(`${BASE_URL}/api/leaderboard`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to get leaderboard');
  }

  const data: LeaderboardResponse = await res.json();

  return data.leaderboards.sort((user1, user2) => user2.score - user1.score);
};

