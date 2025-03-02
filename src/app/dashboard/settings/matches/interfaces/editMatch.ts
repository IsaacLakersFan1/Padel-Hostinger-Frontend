import { Match } from "@/app/dashboard/matches/interfaces/Matches";
import { Player } from "@/app/dashboard/players/interfaces/player";


export interface EditMatchProps {
    id: number;
    getMatchById: (id: string) => void;
    updateMatch: (match: Match) => void;
    match: Match;
    players: Player[];
}
