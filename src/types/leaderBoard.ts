export type LeaderboardEntry = {
    userId: string;
    username: string;
    score: number;
  };
  
export type LeaderboardResponse = {
    success: boolean;
    leaderboards: LeaderboardEntry[];
};
  