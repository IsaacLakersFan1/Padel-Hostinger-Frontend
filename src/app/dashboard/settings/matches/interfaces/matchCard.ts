import { Match } from "@/app/dashboard/matches/interfaces/Matches";
import { Player } from "@/app/dashboard/players/interfaces/player";
export interface MatchCardProps {
    matches: Match[],
    getMatchById: (id: string) => void,
    updateMatch: (match: Match) => void,
    match: Match | null,
    players: Player[]
}



