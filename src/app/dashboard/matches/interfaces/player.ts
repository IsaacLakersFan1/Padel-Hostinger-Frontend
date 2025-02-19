import { Player } from "@/app/dashboard/players/interfaces/player";

export interface PlayerProps {
    playerName: string | null;
    playerNumber: number | null;
    gameModeId: number | null;
    matchId: number;
    addTeammate: (matchId: number, playerId: number, slot: number) => void;
    getPossibleTeammates: (matchId: number) => Promise<void>;
    possibleTeammates: Player[];
    addRandomPlayer: (players: Player[]) => void;
    randomPlayer: Player | undefined;
}
