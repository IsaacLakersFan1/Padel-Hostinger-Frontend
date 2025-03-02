import { Match } from "@/app/dashboard/matches/interfaces/Matches";

export interface MatchesSettingsProps {
    matches: Match[],
    match: Match,
    getMatchesByRun: (run: string) => Promise<void>,
    getMatchById: (id: string) => Promise<void>,
    createMatch: (match: Match) => Promise<void>,
    updateMatch: (match: Match) => Promise<void>,
    run: number,
    runs: number[],
    getAllRuns: () => Promise<void>
}
