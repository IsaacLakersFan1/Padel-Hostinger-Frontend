import axios from "axios"
import { toastError } from "@/hooks/useToastError"
import API_URL from "@/utils/apiConfig"
import { useEffect, useState } from "react"
import { Match } from "@/app/dashboard/matches/interfaces/Matches"
import { Player } from "@/app/dashboard/players/interfaces/player"

export const useMatches = () => {

    const { showToastError } = toastError()
    const token = localStorage.getItem("PadelToken")
    const [matches, setMatches] = useState<Match[]>([]);
    const [match, setMatch] = useState<Match | null>(null);
    const [run, setRun] = useState<number>(0);
    const [runs, setRuns] = useState<{run: number}[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);

    const getMatchesByRun = async (run: string) => {
        try {
            const response = await axios.post(`${API_URL}/api/matches/get-matches-by-run`,{run: parseInt(run)}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMatches(response.data.matches)
            console.log('matches from useMatches', response.data.matches);
        } catch (error) {
            showToastError("Error fetching matches")
        }
    }

    const getMatchById = async (id: string) => {
        try {
            const response = await axios.post(`${API_URL}/api/matches/get-match-by-id/`, {id: parseInt(id)}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMatch(response.data)
        } catch (error) {
            showToastError("Error fetching match")
        }
    }

    const createMatch = async (match: Match) => {
        try {
            await axios.post(`${API_URL}/api/matches/create-match`, match, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            showToastError("Error creating match")
        }
    }

    const updateMatch = async (match: Match) => {
        const { id, player1Id, player2Id, player3Id, player4Id,winnerTeam, run, season, gameModeId } = match;
        try {
            await axios.post(`${API_URL}/api/matches/update-match`, { matchId: id, player1Id, player2Id, player3Id, player4Id,winnerTeam, run, season, gameModeId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            getMatchesByRun(runs[0].run.toString());
        } catch (error) {
            showToastError("Error updating match")
        }
    }

    const getAllRuns = async () => {
        console.log('calling getAllRuns from useMatches');
        try {
            const response = await axios.get(`${API_URL}/api/matches/get-all-runs`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setRuns(response.data.runs)
            // console.log('runs from useMatches', response.data.runs);
            getMatchesByRun(response.data.runs[0].run.toString());
        } catch (error) {
            showToastError("Error fetching runs")
        }
    }
    
    const getAllPlayers = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/players/all-players`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPlayers(response.data)
            console.log('players from useMatches', response.data);
        } catch (error) {
            showToastError("Error fetching players")
        }
    }

    useEffect(() => {
        getAllPlayers()
    }, [])
    

  return {
    matches,
    match,
    getMatchesByRun,
    getMatchById,
    createMatch,
    updateMatch,
    run,
    runs,
    getAllRuns,
    players,
    getAllPlayers
  }
}
