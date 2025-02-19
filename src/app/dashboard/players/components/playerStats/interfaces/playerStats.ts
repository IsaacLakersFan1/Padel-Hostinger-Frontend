export interface PlayerStats {
    player: Player;
    totalMatches: number;
    wins: number;
    losses: number;
    eloHistory: number[];
}

export interface Player {
    id: number;
    name: string;
    status: string;
    userId: number;
    imageUrl: string;
}


