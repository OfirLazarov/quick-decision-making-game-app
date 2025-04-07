import { TableHead, TableRow, TableBody  } from "@mui/material";
import { LeaderboardEntry } from "../types/leaderBoard";
import Crown from "../assets/Crown.svg"
import { StyledTable, HeaderCell, FirstPlaceCell, CenterCell, StyledCrownIcon,TableContainer } from "./styles/LeaderboardTable.styles";

type Props = {
  leaderboard: LeaderboardEntry[];
};

const LeaderboardTable = ({ leaderboard }: Props) => {
    const positionSuffix = ["st", "nd", "rd"];
    const getSuffix = (index: number) =>
      positionSuffix[index] || "th";

  return (
    <TableContainer>
       <StyledTable>
      <TableHead>
        <TableRow>
          <HeaderCell>POS</HeaderCell>
          <HeaderCell>Player name</HeaderCell>
          <HeaderCell>Score</HeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {leaderboard.map((entry, i) => {
        const isFirst = i === 0;
          const PosCell = isFirst ? FirstPlaceCell : CenterCell;
          const NameCell = isFirst ? FirstPlaceCell : CenterCell;
          const ScoreCell = isFirst ? FirstPlaceCell : CenterCell;

          return (
            <TableRow key={entry.userId}>
              <PosCell>
                {isFirst && <StyledCrownIcon src={Crown} alt="crown" />}
                {i + 1}
                {getSuffix(i)}
              </PosCell>
              <NameCell>{entry ? entry.username : "Player name"}</NameCell>
              <ScoreCell>{entry ? entry.score : "xxx"}</ScoreCell>
            </TableRow>
          );
        })}
      </TableBody>
    </StyledTable>
    </TableContainer>
  );
};

export default LeaderboardTable;
