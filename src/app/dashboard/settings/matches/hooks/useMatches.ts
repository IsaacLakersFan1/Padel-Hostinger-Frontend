import axios from "axios"
import { toastError } from "@/hooks/useToastError"
import API_URL from "@/utils/apiConfig"
import { useState } from "react"
import { Match } from "@/app/dashboard/matches/interfaces/Matches"

export const useMatches = () => {

    const { showToastError } = toastError()
    const token = localStorage.getItem("PadelToken")
    const [matches, setMatches] = useState<Match[]>([]);
    const [match, setMatch] = useState<Match | null>(null);

    const getMatchesByRun = async () => {
        try {
            const response = await axios.get(`${API_URL}/matches/get-matches-by-run`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMatches(response.data)
        } catch (error) {
            showToastError("Error fetching matches")
        }
    }

    const getMatchById = async (id: string) => {
        try {
            const response = await axios.get(`${API_URL}/matches/get-match-by-id/${id}`, {
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
            await axios.post(`${API_URL}/matches/create-match`, match, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            showToastError("Error creating match")
        }
    }

    const updateMatch = async (match: Match) => {
        try {
            await axios.put(`${API_URL}/matches/update-match`, match, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            showToastError("Error updating match")
        }
    }

  return {
    matches,
    match,
    getMatchesByRun,
    getMatchById,
    createMatch,
    updateMatch
  }
}
