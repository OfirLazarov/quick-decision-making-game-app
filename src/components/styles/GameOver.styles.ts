import { Box } from "@mui/material";
import styled from "styled-components";

export const GameOverContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2.5), 
}));

export const ButtonRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1.5),
    justifyContent: 'center',
    marginTop: theme.spacing(1),
}));
