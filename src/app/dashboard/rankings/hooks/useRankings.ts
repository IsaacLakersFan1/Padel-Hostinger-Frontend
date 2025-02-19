import { useState } from "react";
import axios from "axios";
import API_URL from "@/utils/apiConfig";
import { PlayerStats } from "../interfaces/rankings";
import { toastError } from "@/hooks/useToastError";

export const useRankings = () => {
    const { showToastError } = toastError();
    const token = localStorage.getItem("PadelToken");

    const [players, setPlayers] = useState<PlayerStats[]>([]);

    const getRankings = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/players/rankings`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            setPlayers(response.data.players);
        } catch (error) {
            showToastError(error);
        }
    }

    
    return {
        players,
        getRankings
    }    
    
}

