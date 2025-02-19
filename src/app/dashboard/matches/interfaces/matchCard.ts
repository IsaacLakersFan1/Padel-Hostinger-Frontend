import { Match } from "./Matches";
import { Player } from "@/app/dashboard/players/interfaces/player";
export interface MatchCardProps {
    match: Match;
    onStatusChange: (matchId: number, winnerTeam: number) => void;
    addTeammate: (matchId: number, playerId: number, slot: number) => Promise<void>;
    getPossibleTeammates: (matchId: number) => Promise<void>;
    possibleTeammates: Player[];
    addRandomPlayer: (players: Player[]) => void;
    randomPlayer: Player | undefined;
}
