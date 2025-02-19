
export interface WinnerButtonProps {
    winnerTeam: number
    matchId: number
    onStatusChange: (matchId: number, winnerTeam: number) => void
    playerName1: string
    playerName2: string
    whoWin: number
}

