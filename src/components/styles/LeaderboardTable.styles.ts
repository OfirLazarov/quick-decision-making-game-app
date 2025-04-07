import styled from "styled-components";
import { Table, TableCell } from "@mui/material";

export const TableContainer = styled.div(({ theme }) => ({
    margin: "0 auto",
    width: "1100px",
    height: "453px",
    border: `2px solid ${theme.palette.pink.main}`,
    borderRadius: "16px",
    overflow: "hidden",
    background: theme.palette.background.default,
}));
  
export const StyledTable = styled(Table)`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  table-layout: fixed; // ensures equal column width
`;


export const HeaderCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.pink.light,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "36px",
    borderLeft: `1px solid ${theme.palette.pink.main}`,
    width: '33.33%',
}));

export const CenterCell = styled(TableCell)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '36px',
    padding: theme.spacing(1.75), // ~14px
    border: `1px solid ${theme.palette.gray.light}`,
    width: '33.33%',
}));

export const FirstPlaceCell = styled(CenterCell)(({ theme }) => ({
    color: `${theme.palette.info.main} !important`,
}));

export const StyledCrownIcon = styled.img`
  height: 30px;
  vertical-align: middle;
  margin-right: 4px;
`;
