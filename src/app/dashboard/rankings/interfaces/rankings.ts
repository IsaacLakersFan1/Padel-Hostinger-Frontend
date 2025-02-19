export interface RankingsProps {
    players: PlayerStats[];
    season: number;
}

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
    user_id: number;
    imageUrl: string;
}

export interface PlayerCardProps {
    playerStats: PlayerStats;
}
