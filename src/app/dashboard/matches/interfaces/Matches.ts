
export interface Match {
    id: number;
    player1Id: number | null;
    player2Id: number | null;
    player3Id: number | null;
    player4Id: number | null;
    user1Id: number;
    winnerTeam: number;
    gameModeId: number;
    createdAt: Date;
    updatedAt: Date;
    runId: number;
    date: Date;
    season: number;
    player1: Player;
    player2: Player;
    player3: Player;
    player4: Player;
}

export interface Player {
    id: number;
    name: string;
    email: string;
    image: string;
    userId: number;
    status: string;
}
