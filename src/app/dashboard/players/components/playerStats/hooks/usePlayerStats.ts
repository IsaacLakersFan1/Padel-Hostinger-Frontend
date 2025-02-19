import axios from "axios";
import API_URL from "@/utils/apiConfig";
import { PlayerStats } from "../interfaces/playerStats";
import { useState } from "react";
import { toastError } from "@/hooks/useToastError";
import { useParams } from "react-router-dom";
export const usePlayerStats = () => {
    const { showToastError } = toastError();

    const [playerStats, setPlayerStats] = useState<PlayerStats>();
    const token = localStorage.getItem("PadelToken");
    const { playerId } = useParams();

    const getPlayerStats = async () => {
        try {
            const response = await axios.post(`${API_URL}/api/players/player-stats`, { playerId: Number(playerId) }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(response.data);
            setPlayerStats(response.data);
        } catch (error) {
            showToastError("Error fetching player stats");
        }
    }


    return {
        playerStats,
        getPlayerStats,
    }
    
}



